/**
 * Recursive factorial
 * 
 * @param {number} number 
 * @returns {number}
 */
 export function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(factorial(5));

/**
 * Iterative factorial
 * 
 * @param {number} number 
 * @returns {number}
 */
export function factorial_iterative(number) {
    if (number === 0) {
        return 1;
    }
    
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

export default factorial;
