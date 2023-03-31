/* test if the given character is a-z, A-Z, 0-9
 * 
 */
export default function isLetterOrDigit(c) {
    return /[a-zA-Z\d]/.test(c); // no '_'; that would be [\w]
}