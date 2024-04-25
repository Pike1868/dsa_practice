// index.ts
import { romanToInt } from './problems/romanToInt';
import { isPalindrome } from './problems/palindromeNumber';
import { gcd } from './problems/greatestCommonDivisor'
import { longestCommonPrefix } from "./problems/longestCommonPrefix"

//RomanToInt Problem
// console.log("Roman to Integer MXIV",romanToInt("MXIV"))//1014
// console.log("Roman to Integer IX", romanToInt("IX"))//9
// console.log("Roman to Integer LVIII",romanToInt("LVIII"))//58
// console.log("Roman to Integer MCMXCIII", romanToInt("MCMXCIII")) //1993


// PalindromeNumber Problem
//Using assertion testing here so if they match the expected result all logs should return true...

// console.log('Is 121 a palindrome?:', isPalindrome(121) === true);  
// console.log('Is 1231 a palindrome?:', isPalindrome(1231) === false); 
// console.log("Is 4444444 a palindrome?:", isPalindrome(4444444) === true) 
// console.log('Is 1 a palindrome?:', isPalindrome(1) === true); 
// console.log('Is 12 a palindrome?:', isPalindrome(12) === false); 


//Greatest Common Divisor Problem

// console.log(gcd("ABCABC", "ABCABCABC"));
// console.log(gcd("ABABAB", "ABAB"));
// console.log(gcd("LEET", "CODE"));

//Longest Common Prefix Problem

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix(["march", "marker", "market", "marriage", "marsh", "mary"]))