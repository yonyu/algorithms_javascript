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
 * JavaScript Map keeps the key order as it is inserted. This makes the implementation
 * straight forward.
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        let value = this.cache.get(key);
        if (value === undefined) {
            return -1;
        } else {
            // Remove the key from the map and add it to the end    
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
    }

    delete(key) {
        return this.cache.delete(key);
    }

    set(key, value) {
        const deleted = this.delete(key);
        // the key does not exist
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.cache.size()>= this.capacity) {
                let firstKey = this.cache.keys().next().value; // the first key is the oldest
                this.cache.delete(firstKey);
            }
        }
        this.cache.set(key, value); // add it to the end; it is the most frequent used
    }
}