/**
 * Recursive factorial
 * You would never want to use a recursive factorial function in real-world code.
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

/**
 * Simulate recursion with iteration
 * This explains the steps involved in recursive calculation of factorial.
 * @param {*} number 
 */
export function factorial_2(input) {
    if (input === 0) return 1;

    let callStack = [];
    callStack.push({"returnAddr": "start", "number": input}); // "Call" the "factorial() function"
    let returnValue;

    while (callStack.length > 0) {
        // The body of the "factorial() function":
        let number = callStack[callStack.length - 1]["number"];
        let returnAddr = callStack[callStack.length -1]["returnAddr"];

        if (returnAddr == "start") {
            if (number === 1) {
                // Base case
                returnValue = 1;
                callStack.pop(); // "Return" from "function call"
                continue;
            } else {
                // Recursive case
                callStack[callStack.length-1]["returnAddr"] = "after recursive call";
                // "Call" the "factorial() function":
                callStack.push({"returnAddr": "start", "number": number - 1})
                continue;
            }
        } else if (returnAddr =="after recursive call") {
            returnValue = number * returnValue;
            callStack.pop(); // "Return" from "function call"
            continue;
        }
    }
    return returnValue;
}

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
