import LRUCache from "../../src/caching/LRUCache";

describe("test cache implementation", () => {
    it("test 1", () => {
         const lru = new LRUCache(2);
         lru.put(1, 1);
         lru.put(2, 2);
         expect(lru.get(1)).toBe(1);
         lru.put(3, 3); // evict key 2
         expect(lru.get(2)).toBe(-1); // key 2 not found
         lru.put(4, 4); // evict key 1
         expect(lru.get(1)).toBe(-1); // key 1 not found

         expect(lru.get(3)).toBe(3); // key 1 not found
         expect(lru.get(4)).toBe(4); // key 1 not found
    })
})