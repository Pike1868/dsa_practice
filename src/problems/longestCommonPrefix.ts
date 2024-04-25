/**Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string
 * amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string.
 * 
 * Examples:
 * let strs = ["flower", "flow", "flight"]
 * 1. longestCommonPrefix( strs ) => "fl"
 * 
 * let strs = ["dog", "racecar", "car"]
 * 2. longestCommonPrefix( strs ) => ""
 *   
 * 
 * Constraints:
 * 1 <= strs.length <=200 // the input array's length will be at least 1 but less than 200 
 * 0 <= strs[i].length <=200 // each string in the array can be of 0 to 200 characters in length
 * strs[i] will consist of only lowercase english letters
 * 
 */

/**First thoughts: Looks like we may have to use a nested loop to be able to look at each character in each string of the array
 * 
 *  We need to access each string in the array
    We need to access the same character in each string 
 *
 * */

export function longestCommonPrefix(strs: string[]): string {
    let commonPrefix: string = ""
    //base case: Return an empty string if the array is empty or the first string is empty
    if (strs.length === 0 || strs[0].length === 0) return commonPrefix;

    //Since the inner loop will run first and the character index will need to stay the same while the string index changes
    //Outer loop variable will control the character index
    for (let i: number = 0; i < strs[0].length; i++) {
        //Character to compare from the first string
        let currentChar: string = strs[0][i]
        //Inner loop variable will control the string index 
        for (let j: number = 0; j < strs.length; j++) {
            //If current string is shorter than the first or if characters don't match return commonPrefix
            if (i >= strs[j].length || currentChar !== strs[j][i]) {
                return commonPrefix;
            }
        }
        // If all strings have the same character at position i, we can add it to the commonPrefix string
        commonPrefix += currentChar;
    }

    return commonPrefix
}

