/* test if the given character is a-z, A-Z, or 0-9
 * 
 */
export default function isLetterOrDigit(c) {
    if (typeof c !== 'string') return false;

    let c_codepoint = c.charCodeAt(0);
    
    return (c_codepoint >= 48 && c_codepoint <= 57) || 
           (c_codepoint >= 65 && c_codepoint <= 90) || 
           (c_codepoint >= 97 && c_codepoint <= 122);
}