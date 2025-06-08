// Manacher’s Algorithm is an elegant way to find the longest palindromic 
// substring in O(n) time, making it the most efficient solution for this
// problem.
//
// Intuition
// 
// Manacher’s Algorithm optimizes palindrome detection by leveraging symmetry 
// properties:
// 1. Transform the string: Insert special characters(#) between letters to 
//    handle even-length palindromes uniformly.
// 2. Use a palindrome radius array (p): Track the length of the palindrome 
//    centered at each position.
// 3. Expand efficiently: Instead of checking every character, use previously 
//    computed results to skip redundant checks.
// 
// Thought Process
// 
// 1. Preprocess the string:
//   - Convert "racecar" → "#r#a#c#e#c#a#r#" to handle even-length cases.
//   - This ensures every palindrome has a single center.
// 
// 2. Iterate through the transformed string:
//   - Maintain a center (c) and right boundary (r) of the longest palindrome
//     found so far.
//   - If a new character is inside the boundary, use mirror properties to 
//     initialize its palindrome length.
//   - Expand outward only when necessary.
// 
// 3. Extract the longest palindrome:
//   - Convert back to the original format.

export default class LongestPalindrome {
    constructor() {
    }
    
    manacherAlgorithm (input) {
        if (!input || input.length === 0) return "";

        // Step 1: Transform the string to handle even-length palindromes uniformly
        let transformed = "#" + input.split("").join("#") + "#";
        let n = transformed.length;

        // p[i] is the radius of the palindrome centered at i
        let p = new Array(n).fill(0);

        // Variables for tracking the longest palindrome
        let center = 0;   // The center of the longest palindrome found so far
        let right = 0;    // The rightmost boundary of the longest palindrome discovered
        let maxCenter = 0;// The center index of the longest palindromic substring found
        let maxRadius = 0;   // The length of the longest palindromic substring found

        // Step 2: Core of Manacher's algorithm
        for (let i = 0; i < n; i++) {
            // Mirror index: The symmetric position of 'i' with respect to 'center'
            let mirror = center - (i - center);
            if (mirror > 0 && i < right) {
                p[i] = Math.min(p[mirror], right - i);
            }

            // expand the palindrome centered at i
            while (i + p[i] + 1 < n && i - (p[i] + 1) >= 0 && transformed[i - (p[i] + 1)] === transformed[i + (p[i] + 1)]) {
                p[i] += 1;
            }

            // Update center and right boundary if the palindrome extends beyond 'right'
            if (i + p[i] > right) {
                center = i;
                right = i + p[i];
            }

            // update the longest palindrome
            if (p[i] > maxRadius) {
                maxRadius = p[i];
                maxCenter = i;
            }
        }

        // Step 3: Extract the longest palindrome from original string
        let start = Math.floor((maxCenter - maxRadius) / 2);
        let end = Math.floor((maxCenter + maxRadius) / 2); // start + maxRadius

        return input.slice(start, end); 
    }

    // Dynamic Programming (O(n²))
    // 
    // Use a table to store whether a substring is a palindrome.
    // 
    // Build the solution iteratively using previously computed results.
    // 
    // Intuition
    // Dynamic programming helps us store results of subproblems to avoid redundant computations. 
    // The key idea is:
    // 
    // If a substring s[i..j] is a palindrome, then:
    // 
    // s[i] == s[j]
    // 
    // The inner substring s[i+1..j-1] must also be a palindrome.
    // 
    // Thought Process
    // Define a DP table dp[i][j]:
    // 
    // true if s[i..j] is a palindrome.
    // 
    // false otherwise.
    // 
    // Base Cases:
    // 
    // Every single character is a palindrome (dp[i][i] = true).
    // 
    // Two consecutive identical characters form a palindrome (dp[i][i+1] = true).
    // 
    // Transition:
    // 
    // If s[i] == s[j] and dp[i+1][j-1] is true, then dp[i][j] = true.
    // 
    // Iterate over all substring lengths:
    // 
    // Start with length 2, then 3, up to n.
    // 
    // Track the longest palindrome found.
    dynamicProgramming(input) {
        if (!input || input.length === 0) return "";

        let chars = input.split("");
        let n = chars.length;
        let dp = new Array(n).fill(0);

        let start = 0;
        let maxLen = 1;
        for (let i = 0; i < n; i++) {
            dp[i] = new Array(n).fill(0);
        }

        // All substrings of length 1 are palindromes
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }

        // Check for substrings of length 2
        for (let i = 0; i < n; i++) {
            if (i+1<n && chars[i] === chars[i+1]) {
                dp[i][i+1] = 1;
                start = i;
                maxLen = 2;
            }
        }

        // Check for substrings of length 3 or more
        for (let len = 3; len <= n; len++) {
            for (let i = 0; i < n - len + 1; i++) {
                let j = i + len -1;
                if (chars[i] === chars[j] && dp[i+1][j-1]) {
                    dp[i][j] = 1;
                    if (len > maxLen) {
                        start = i;
                        maxLen = len;
                    }
                }
            }
        }

        return input.slice(start, start + maxLen);
    }
}