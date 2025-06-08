import { assert } from "console";
import LongestPalindrome from "../../strings/longestPalindromeSubstring";

describe("Test find the longest palindrome substring", () => {
    test("Manacher's Algorithm", () => {
        let s = new LongestPalindrome();
        let result = s.manacherAlgorithm("racecar");
        let expected = "racecar";
        expect(result).toEqual(expected);
    });

    test("Manacher's Algorithm with multiple strings", () => {
        let s = new LongestPalindrome();
        let testCases = ["a", "babad", "cbbd", "rarr", "racecar", "rarrrr"];
        let palindromes = ["a", "bab", "bb", "rar", "racecar", "rrrr"];
        let result = testCases.map((v) => s.manacherAlgorithm(v));
        expect(result).toEqual(palindromes);
    });

    test("Dynamic programming algorithm with multiple strings", () => {
        let s = new LongestPalindrome();
        let testCases = ["a", "babad", "cbbd", "rarr", "racecar", "rarrrr"];
        let palindromes = ["a", "bab", "bb", "rar", "racecar", "rrrr"];
        let result = testCases.map((v) => s.dynamicProgramming(v));
        expect(result).toEqual(palindromes);
    });

    test("Dynamic programming algorithm with multiple long strings", () => {
        let s = new LongestPalindrome();
        let testCases = ["racecar mom racecar zds", 
            "xyz step on no pets mom step on no pets", 
            "never odd or even mom never odd or even mom never reven mom neve ro ddo reven mom neve ro ddo reven"
        ];
        let palindromes = ["racecar mom racecar", 
            "step on no pets mom step on no pets", 
            "never odd or even mom never odd or even mom never reven mom neve ro ddo reven mom neve ro ddo reven"
        ];
        let result = testCases.map((v) => s.manacherAlgorithm(v));
        expect(result).toEqual(palindromes);
    });

});