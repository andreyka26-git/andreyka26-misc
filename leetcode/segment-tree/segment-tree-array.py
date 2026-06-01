class SegmentTree:
    def __init__(self, arr):
        self.arr = [0] * (4 * len(arr))
        self.n = len(arr)
        
        def build(curr, left, right):
            mid = left + ((right - left) // 2)
            
            if left == right:
                self.arr[curr] = arr[mid]
                return arr[mid]

            leftchildind, rightchildind = self.children(curr)
            self.arr[curr] = build(leftchildind, left, mid) + build(rightchildind, mid + 1, right)
            
            return self.arr[curr]

        self.arr[0] = build(0, 0, len(arr) - 1)
    
    def children(self, ind):
        return (ind * 2 + 1, ind * 2 + 2)
    
    def _update(self, targetind, val, curr, left, right):
        mid = left + ((right - left) // 2)
        
        if left == right == targetind:
            self.arr[curr] = val
            return
        
        lc, rc = self.children(curr)
        
        if targetind <= mid:
            self._update(targetind, val, lc, left, mid)
        else:
            self._update(targetind, val, rc, mid + 1, right)
        
        self.arr[curr] = self.arr[lc] + self.arr[rc]

    def update(self, ind, val):
        self._update(ind, val, 0, 0, self.n - 1)
    
    def _rangesum(self, lind, rind, curr, left, right):
        if lind <= left <= right <= rind:
            return self.arr[curr]
        
        mid = left + ((right - left) // 2)
        
        lc, rc = self.children(curr)
        
        if lind > mid:
            return self._rangesum(lind, rind, rc, mid + 1, right)
        
        if rind <= mid:
            return self._rangesum(lind, rind, lc, left, mid)
        
        s = 0
        
        s += self._rangesum(lind, mid, lc, left, mid) + self._rangesum(mid + 1, rind, rc, mid + 1, right)
        return s
        
        
    def rangesum(self, lind, rind):
        return self._rangesum(lind, rind, 0, 0, self.n - 1)
    


# ── Tests ──────────────────────────────────────────────
 
def run_test(name, steps):
    """steps: list of (action, args, expected)"""
    tree = None
    passed = 0
    failed = 0
    for i, (action, args, expected) in enumerate(steps):
        if action == "build":
            tree = SegmentTree(args)
            passed += 1
            continue
        elif action == "rangesum":
            result = tree.rangesum(*args)
        elif action == "update":
            tree.update(*args)
            result = None
 
        if expected is None:
            passed += 1
            continue
 
        status = "PASS" if result == expected else "FAIL"
        icon = "✅" if status == "PASS" else "❌"
        if status == "PASS":
            passed += 1
        else:
            failed += 1
            print(f"  {icon} step {i}: {action}{args}  got={result}  expected={expected}")
 
    icon = "✅" if failed == 0 else "❌"
    print(f"{icon} {name}  ({passed}/{passed + failed} passed)")
 
 
print("=" * 50)
print("Segment Tree Tests")
print("=" * 50)
 
# LeetCode 307 example
run_test("LC307 example", [
    ("build",    [1, 3, 5],       None),
    ("rangesum", (0, 2),          9),
    ("update",   (1, 2),          None),
    ("rangesum", (0, 2),          8),
])
 
# single element
run_test("single element", [
    ("build",    [42],            None),
    ("rangesum", (0, 0),          42),
    ("update",   (0, 10),         None),
    ("rangesum", (0, 0),          10),
])
 
# full range query
run_test("full range", [
    ("build",    [1, 2, 3, 4, 5], None),
    ("rangesum", (0, 4),          15),
])
 
# partial ranges
run_test("partial ranges", [
    ("build",    [1, 2, 3, 4, 5], None),
    ("rangesum", (0, 0),          1),
    ("rangesum", (2, 3),          7),
    ("rangesum", (3, 4),          9),
    ("rangesum", (1, 3),          9),
])
 
# multiple updates
run_test("multiple updates", [
    ("build",    [1, 2, 3, 4, 5], None),
    ("update",   (0, 10),         None),
    ("update",   (4, 50),         None),
    ("rangesum", (0, 4),          69),
    ("rangesum", (1, 3),          9),
    ("rangesum", (0, 0),          10),
])
 
# negatives and zeros
run_test("negatives and zeros", [
    ("build",    [-1, 0, 3, -2],  None),
    ("rangesum", (0, 3),          0),
    ("rangesum", (0, 1),          -1),
    ("update",   (1, 5),          None),
    ("rangesum", (0, 3),          5),
])
 
print("=" * 50)