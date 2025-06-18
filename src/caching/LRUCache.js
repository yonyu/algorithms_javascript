/**
 * LeetCode 146. LRU Cache
 * Implement the LRUCache class:
 *
 *   LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 *
 *   int get(int key) Return the value of the key if the key exists, otherwise return -1.
 *
 *   void put(int key, int value) Update the value of the key if the key exists. 
 *   Otherwise, add the key-value pair to the cache. If the number of keys exceeds the 
 *   capacity from this operation, evict the least recently used key.
 * 
 * JavaScript's Map maintains insertion order, so we can use it to track LRU.
 * - The most recently used item is moved to the end of the Map.
 * - When the cache exceeds capacity, remove the oldest item (Map's first entry).
 */

export default class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * Get the value of the key if it exists in the cache.
     * Move the key to the end to mark it as recently used.
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);    
        this.cache.delete(key);          // Remove old position
        this.cache.set(key, value);      // Re-insert to end as most recently used
        return value;
    }

    /**
     * Put the key-value pair into the cache.
     * If the key exists, update and mark as recently used.
     * If new and capacity is exceeded, evict the least recently used item.
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else {
            // If cache is full, delete the least recently used item
            if (this.cache.size >= this.capacity) {
                // Remove the least recently used item (first inserted)
                let firstKey = this.cache.keys().next().value; // the first key is the oldest
                this.cache.delete(firstKey);
            }
        }
        this.cache.set(key, value); // Insert as most recently used
    }
}