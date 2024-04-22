/**Greatest Common Divisor of Strings
 * 
 * For two strings "s" and "t", we say "t divides s" if and only if s = t + t + t + t....+ t + t 
 * (i.e., "t" is concatenated with itself one or more times).
 * 
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2
 * 
 * Examples: 
 * 
 *  1. gcd("ABCABC", "ABC") =>"ABC"
 *  2. gcd("ABABAB", "ABAB") => "AB"
 *  3. gcd("LEET", "CODE") => ""
 * 
 */

//inputs: 2 strings
//output: the greatest common divisor or and empty string "" if there is none

/**So for the two strings to be able to be divided by a "gcd" of strings then both strings must
 * have the same characters.
 * 
 * Sequence and the order in which they appear is also important, but as a base case I will check
 * that both strings first contain the same characters, otherwise we can immediately return and empty string "" 
*/

export function gcd(str1: string, str2: string): string {
    //base case
    if (str1 + str2 !== str2 + str1) return ""
    let a: number = str1.length;
    let b: number = str2.length;

    //loop until we find the highest common factor (length of string)
    while (b) {
        let temp: number = b;
        b = a % b;
        a = temp;
    }

    return str1.substring(0, a)
}

