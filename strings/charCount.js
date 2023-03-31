import isLetterOrDigit from "./isLetterOrDigit.js";

export default function charCount(str) {
    let result = {};
    // str is null or empty
    if (!str || typeof str !== 'string') {
        return result;
    }

    for (let char of str) { 
        if (isLetterOrDigit(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}
