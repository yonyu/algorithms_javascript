import isLetterOrDigit from "./isLetterOrDigit.js";

export default function charCount(s) {
    let result = {};
    // s is null or empty
    if (!s || typeof s !== 'string') {
        return result;
    }

    for (let index = 0; index < s.length; index++) {
        let char = s[index].toLowerCase();
        if (isLetterOrDigit(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}
