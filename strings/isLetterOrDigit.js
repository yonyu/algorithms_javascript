/* test if the given character is a-z, A-Z, or 0-9
 * 
 */
export default function isLetterOrDigit(char) {
    if (typeof char !== 'string') return false;

    let code = char.charCodeAt(0);
    
    return (code >= 48 && code <= 57) || 
           (code >= 65 && code <= 90) || 
           (code >= 97 && code <= 122);
}