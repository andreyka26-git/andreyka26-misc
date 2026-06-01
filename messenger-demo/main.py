"""
Messenger App Scaling Validation Experiment

Architecture:
- Gateway nodes: Accept user connections
- Router nodes: Route messages to interested gateways
- Users connect to gateways via round-robin
- Gateways subscribe to routers based on chat IDs using consistent hashing
- Each user subscribes to ONLY ONE channel
"""

import random
from collections import defaultdict
from dataclasses import dataclass
from typing import Set, Dict, List

# ============================================================================
# EXPERIMENT CONSTANTS - Modify these to run different experiments
# ============================================================================

NUM_CHANNELS = 1000              # Total number of chat channels
USERS_PER_CHANNEL = 10000        # Number of users IN EACH channel
NUM_ROUTER_NODES = 200           # Number of router/channel nodes
NUM_GATEWAY_NODES = 2000         # Number of gateway nodes

RANDOM_SEED = 42                 # For reproducibility


# ============================================================================
# SIMULATION
# ============================================================================

@dataclass
class User:
    id: int
    channel_id: int  # Each user subscribes to exactly ONE channel
    gateway_node: int


class GatewayNode:
    def __init__(self, node_id: int):
        self.id = node_id
        self.users: List[User] = []
        self.subscribed_router_nodes: Set[int] = set()
    
    def add_user(self, user: User):
        self.users.append(user)
        # Subscribe to router node for this user's channel
        router_node = self.get_router_for_channel(user.channel_id)
        self.subscribed_router_nodes.add(router_node)
    
    def get_router_for_channel(self, channel_id: int) -> int:
        """Consistent hashing: map channel to router node"""
        return channel_id % NUM_ROUTER_NODES


class RouterNode:
    def __init__(self, node_id: int):
        self.id = node_id
        self.connected_gateways: Set[int] = set()


def run_experiment():
    """Run the messenger scaling experiment"""
    
    random.seed(RANDOM_SEED)
    
    total_users = NUM_CHANNELS * USERS_PER_CHANNEL
    
    # Initialize nodes
    gateway_nodes = [GatewayNode(i) for i in range(NUM_GATEWAY_NODES)]
    router_nodes = [RouterNode(i) for i in range(NUM_ROUTER_NODES)]
    
    # Create users: USERS_PER_CHANNEL users for each channel
    # Assign to gateways using round-robin
    user_id = 0
    for channel_id in range(NUM_CHANNELS):
        for _ in range(USERS_PER_CHANNEL):
            # Assign to gateway using round-robin
            gateway_id = user_id % NUM_GATEWAY_NODES
            
            user = User(
                id=user_id,
                channel_id=channel_id,
                gateway_node=gateway_id
            )
            
            # Add user to gateway (gateway subscribes to necessary routers)
            gateway_nodes[gateway_id].add_user(user)
            
            user_id += 1
    
    # Build reverse mapping: router -> gateways
    for gateway in gateway_nodes:
        for router_id in gateway.subscribed_router_nodes:
            router_nodes[router_id].connected_gateways.add(gateway.id)
    
    # ========================================================================
    # STATISTICS
    # ========================================================================
    
    # Gateway statistics
    router_subscriptions = sorted([len(gw.subscribed_router_nodes) for gw in gateway_nodes])
    
    # Calculate percentiles
    def percentile(data, p):
        index = int(len(data) * p / 100)
        return data[min(index, len(data) - 1)]
    
    p30 = percentile(router_subscriptions, 30)
    p60 = percentile(router_subscriptions, 60)
    p90 = percentile(router_subscriptions, 90)
    
    print(f"Users: {total_users:,} | Router Nodes: {NUM_ROUTER_NODES} | Gateway Nodes: {NUM_GATEWAY_NODES}")
    print(f"Router connections per gateway - p30: {p30}, p60: {p60}, p90: {p90}")


if __name__ == "__main__":
    run_experiment()
