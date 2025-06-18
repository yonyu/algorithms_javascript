/**
 * The coin change problem is a classic dynamic programming problem. Here's the key insight:
 *
 * We have coins with denominations d₁ < d₂ < ... < dₘ
 * We want to make a target amount using the minimum number of coins
 * We have unlimited coins of each denomination
 *
 * Intuition:
 * We use dynamic programming with the following recurrence relation:
 * dp[i] = min(dp[i], dp[i - coin] + 1) for each coin where coin <= i
 *
 * This means: to make amount i, we can use any coin and then make the remaining
 * amount (i - coin) optimally.
 * @returns
 * @param coins
 * @param amount
 */
export function coinChange(coins, amount) {
    // dp[i] represents the minimum coins needed to make amount i
    // Initialize with a value larger than any possible answer
    // The maximum coins needed is amount (using all 1-denomination coins)
    let dp = [];
    for (let i=1; i<=amount; i++) {
        dp[i] = amount + 1;
    }
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {

        for (const coin of coins) {
            // If this coin value is greater than current amount, skip it
            // (and since coins are sorted, all remaining coins will be larger too)
            if (coin > i) {
                break;
            }

            // If we can make (i - coin) amount, then we can make i amount
            // by using this coin plus the optimal solution for (i - coin)
            dp[i] = Math.min(dp[i-coin] + 1, dp[i]);
        }
    }

    // If dp[amount] is still the initial value, it means we couldn't make the amount
    if (dp[amount] === amount + 1) {
        return undefined;
    }
    return dp[amount];
}


/**
 * The same problem to solve as above.  
 * And also returns the actual coins used with their counts. 
 * 
 * @param {*} denominations 
 * @param {*} amount 
 * @returns 
 */
export function coinChangeWithCoins(denominations, amount) {
    // dp[i] represents the minimum coins needed to make amount i
    // Initialize with a value larger than any possible answer
    // The maximum coins needed is amount (using all 1-denomination coins)
    let dp = [];
    for (let i=1; i<=amount; i++) {
        dp[i] = amount + 1;
    }
    // Base case: 0 coins needed to make amount 0
    dp[0] = 0;

    let parent = []; // Track which coin was used

    for (let i=1; i<=amount; i++) {
        for (let coin of denominations) {
            // If this coin value is greater than current amount, skip it
            // (and since coins are sorted, all remaining coins will be larger too)
            if (coin > i) {
                break;
            }

            // If we can make (i - coin) amount, then we can make i amount
            // by using this coin plus the optimal solution for (i - coin)
            if ( dp[i-coin] < dp[i]) {
                dp[i] = dp[i-coin] + 1;
                parent[i] = coin; // Remember which coin we used
            }
        }
    }

    let resultCounts = new Map();
    let current = amount;

    // Trace back through the parent array to find which coins were used
    while (current > 0) {
        let coin_used = parent[current];

        // Increment the count for this coin denomination
        if (resultCounts.has(coin_used)) {
            resultCounts.set(coin_used, resultCounts.get(coin_used) + 1);
        } else {
            resultCounts.set(coin_used, 1);
        }

        // Move to the remaining amount after using this coin
        current = current - coin_used;
    }

    // Convert Hash Map to sorted array of (key, value) objects
    let coinCounts = [];
    for (const [key,value] of resultCounts.entries()) {
        coinCounts.push({coin: key, count: value});
    }

    coinCounts.sort((a, b) => { 
        if (a.coin < b.coin) {
            return -1;
        } else if ( a.coin > b.coin) {
            return 1;
        } else {
            return 0;
        }
    });

    return {count: dp[amount], coinCounts};

}

export default coinChange;