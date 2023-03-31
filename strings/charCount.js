import isLetterOrDigit from "./isLetterOrDigit.js";

export default function charCount(s) {
    // s is null or empty
    if (!s || typeof s !== 'string') {
        return {};
    }
    let result = {};
    for (let index = 0; index < s.length; index++) {
        let char = s[index].toLowerCase();
        if (/[a-z\d]/.test(char)) {
            // if (result[char] > 0) {
            //     result[char]++;
            // } else {
            //     result[char] = 1;
            // }
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}
