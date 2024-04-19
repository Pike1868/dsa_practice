/**Given an integer x return true if x is a palindrome and false otherwise 
 * 
 * An integer is a palindrome when it reads the same forward and backwards
 * 
 * input:number
 * output: boolean
*/

export function isPalindrome(int:number):boolean{
    //base case: if the number is length of one or empty we return true
    //converted to string to be able to iterate over it
    let intAsStr = int.toString()
    if(intAsStr.length <= 1) return true;

    //now since a palindrome should read the same forwards and backwards
    //then we should be able to traverse the string with two pointers, 
    //one at the beginning and the other at the end

   let left:number = 0
   let right:number = intAsStr.length - 1

  // as we move towards the center respectively,these elements should match
  //then we move up until they meet but can leave the middle element alone as one element can be used in the middle by itself
   while(left < right){
    //immediately return false if we find that there are numbers that don't match at the left and right pointers
    if(intAsStr[left] !== intAsStr[right]) return false
    left++;
    right--;
   }

   //if we went through the whole string and didn't find a mismatch then we can return true as this should satisfy the reqs for a palindrome
    return true
}


// console.log(isPalindrome(121))