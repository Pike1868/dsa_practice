/**605. Can Place Flowers
 * You have a lon flowerbed in which some of the plots are planted,
 * and some are not. However, flowers cannot be planted in adjacent plots.
 * 
 * Given an integer array flowerbed containing 0;s and 1's, where 0 means
 * empty and 1 means not empty, and an integer n, return true if n new flowers
 * can be planted in the flower bed without violating the no-adjacent-flowers rule
 * and false otherwise.
 * 
 * Examples:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * 
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 * 
 * Constraints:
 * 1 <= flowerbed.length <= 2*10^4
 * flowerbed[i] is 0 or 1
 * there are no two adjacent flowers in flowerbed
 * 0 <= n <= flowerbed.length
 */

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    //We will need a variable to count the number of plots that are available
    // We will also need a variable to track which plot we are on
    let count: number = 0
    let i: number = 0;

    //Using a while loop as we move down the plots of the flowerbed
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0 && // check if the plot is empty
            (i === 0 || flowerbed[i - 1] === 0) && //check if plot is the first plot or the plot before it is empty
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) { //check if plot is the last plot or next plot is empty
            count++ //add to count of plots available
            i+=2 //move two plots over to ensure no-adjacent-flowers rule
        }
        else {
            i++; //otherwise just move to the next plot
        }
        //As soon as we have more plots available than the number of flowers to plant
        //we can return true and end the loop
        if (count >= n) {
            return true;
        }
    }
    return count >= n;
}