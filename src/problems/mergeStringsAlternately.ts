/**Merge Strings Alternately
 * You are given two strings word1 and word2. Merge the strings by
 * adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 * 
 * Return the merged string
 * 
 * Example:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 */

export function mergeStringsAlt(word1: string, word2: string): string {
    // Check for empty strings
    if (!word1) return word2;
    if (!word2) return word1;

    let mergedStr: string = ""

    for (let i: number = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) {
            mergedStr += word1[i]
        }

        if (i < word2.length) {
            mergedStr += word2[i]
        }
    }

    return mergedStr
}



