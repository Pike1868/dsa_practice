/**1431. Kids With the Greatest Number of Candies
 * There are "n" kids with candies. You are given an integer array "candies",
 * where each "candies[i]" represents the number of candies the i^th kid has,
 * and an integer extraCandies, denoting the number of extra candies that you have.
 * 
 * Return a boolean array result of length n, where result[i] is true if,
 * after giving the i^th kid all the extraCandies, they will have the greatest 
 * number of candies among all the kids, or false otherwise.
 * 
 * *NOTE: Multiple kids can have the greatest number of candies.
 * 
 * 
 * Examples:
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true, true, true, false, true]
 * 
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [ true, false, false, false, false]
 * 
 * Constraints:
 * n = candies.length  //number of kids
 * 2 <= n <= 100 //more than 2 kids but less than 100 in the array
 * 1 <= candies[i] <= 100 // each kid will have at least 1 candy but less than 100
 * 1 <= extraCandies <= 50 //extraCandies will be at least 1, but less than 100
*/

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = []

    const greatestNumCandies = Math.max(...candies)

    for (let i: number = 0; i < candies.length; i++) {
        const currNumCandies = candies[i] + extraCandies;
        result.push(currNumCandies >= greatestNumCandies ? true : false);
    }
    return result
}