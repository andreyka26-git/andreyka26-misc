class Node:
    def __init__(self, value):
        self.val = value
        
        self.left = None
        self.right = None
        self.par = None
        
        self.subtree_nodes = 1
        
class MinHeap:
    def __init__(self):
        self.root = None
    
    def _increment(self, node):
        node.subtree_nodes += 1
    
    def _decrement(self, node):
        node.subtree_nodes -= 1
        
    def _findlast(self, node, criteria, func):
        if func != None:
            func(node)
        
        if not node.left or not node.right:
            return node
        
        if criteria(node.left, node.right):
            return self._findlast(node.left, criteria, func)
        else:
            return self._findlast(node.right, criteria, func)
            
    def _heapify_down(self, node):
        smallest = node
        if node.left and node.left.val < smallest.val:
            smallest = node.left
            
        if node.right and node.right.val < smallest.val:
            smallest = node.right
            
        if smallest is not node:
            node.val, smallest.val = smallest.val, node.val
            self._heapify_down(smallest)
    
    def pop(self):
        returnval = self.root.val if self.root != None else None
        
        if not self.root:
            return None
        
        if self.root.subtree_nodes <= 1:
            self.root = None
            return returnval
        
        lastnode = self._findlast(self.root, lambda left, right: left.subtree_nodes > right.subtree_nodes, self._decrement)
        if lastnode.left:
            lastnode = lastnode.left
        elif lastnode.right:
            lastnode = lastnode.right
            
        self.root.val = lastnode.val
        
        par = lastnode.par
        
        if par.left == lastnode:
            par.left = None
        else:
            par.right = None
        lastnode.par = None
        
        self._heapify_down(self.root)

        return returnval
        
    def _heapify_up(self, node):
        if node.par and node.par.val > node.val:
            node.par.val, node.val = node.val, node.par.val
            self._heapify_up(node.par)
            
    def push(self, value):
        if self.root == None:
            self.root = Node(value)
            return

        lastnode = self._findlast(self.root, lambda left, right: left.subtree_nodes <= right.subtree_nodes, self._increment)
        
        newnode = Node(value)
        newnode.par = lastnode
        
        if not lastnode.left:
            lastnode.left = newnode
        else:
            lastnode.right = newnode
        
        self._heapify_up(newnode)
        
    def size(self):
        return self.root.subtree_nodes if self.root else 0
    
    def peek(self):
        return self.root.val if self.root != None else None
        
        
        
# --- Tests ---
 
def check(label, got, expected):
    status = "PASS" if got == expected else "FAIL"
    print(f"  [{status}] {label}: got={got!r}, expected={expected!r}")
 
 
def test_basic_push_pop():
    print("\n=== test_basic_push_pop ===")
    h = MinHeap()
    for v in [5, 3, 8, 1, 4]:
        h.push(v)
    results = [h.pop() for _ in range(5)]
    check("sorted order", results, [1, 3, 4, 5, 8])
 
 
def test_single_element():
    print("\n=== test_single_element ===")
    h = MinHeap()
    h.push(42)
    check("peek", h.peek(), 42)
    check("pop", h.pop(), 42)
    check("size after pop", h.size(), 0)
 
 
def test_duplicate_values():
    print("\n=== test_duplicate_values ===")
    h = MinHeap()
    for v in [3, 3, 3, 1, 1]:
        h.push(v)
    results = [h.pop() for _ in range(5)]
    check("sorted with dupes", results, [1, 1, 3, 3, 3])
 
 
def test_size_tracking():
    print("\n=== test_size_tracking ===")
    h = MinHeap()
    check("empty size", h.size(), 0)
    h.push(10)
    check("after 1 push", h.size(), 1)
    h.push(20)
    check("after 2 push", h.size(), 2)
    h.pop()
    check("after 1 pop", h.size(), 1)
 
 
def test_large_sequence():
    print("\n=== test_large_sequence ===")
    import random
    random.seed(0)
    vals = random.sample(range(1000), 50)
    h = MinHeap()
    for v in vals:
        h.push(v)
    results = [h.pop() for _ in range(50)]
    check("50-element sort", results, sorted(vals))
 
 
def test_pop_empty():
    print("\n=== test_pop_empty ===")
    h = MinHeap()
    check("returns None", h.pop(), None)
 
 
if __name__ == "__main__":
    test_basic_push_pop()
    test_single_element()
    test_duplicate_values()
    test_size_tracking()
    test_large_sequence()
    test_pop_empty()
    print("\nDone.")