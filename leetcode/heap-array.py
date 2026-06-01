
class MinHeap:
    def __init__(self):
        self.arr = []
        
    def _child(self, ind):
        return ind * 2 + 1, ind * 2 + 2

    def _par(self, ind):
        return (ind - 1) // 2
    
    def _heapify_up(self, ind):
        if ind == 0:
            return

        par = self._par(ind)
        
        if self.arr[ind] < self.arr[par]:
            self.arr[ind], self.arr[par] = self.arr[par], self.arr[ind]
            self._heapify_up(par)
        
    def push(self, value):
        self.arr.append(value)
        self._heapify_up(len(self.arr) - 1)
    
    def _heapify_down(self, ind):
        left, right = self._child(ind)
        
        lower = ind
        if left < len(self.arr) and self.arr[left] < self.arr[lower]:
            lower = left
        
        if right < len(self.arr) and self.arr[right] < self.arr[lower]:
            lower = right
        
        if lower != ind:
            self.arr[ind], self.arr[lower] = self.arr[lower], self.arr[ind]
            self._heapify_down(lower)
            
    def pop(self):
        if len(self.arr) == 0:
            return None
        retval = self.arr[0]
        
        self.arr[0], self.arr[-1] = self.arr[-1], self.arr[0]
        
        self.arr.pop()
        
        if len(self.arr) > 0:
            self._heapify_down(0)
            
        return retval
        
    def size(self):
        return len(self.arr)
    
    def peek(self):
        return self.arr[0] if len(self.arr) > 0 else None

        
        
        
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