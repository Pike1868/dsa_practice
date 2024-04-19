import { isPalindrome } from '../problems/palindromeNumber';

describe('Palindrome Number Tests', () => {
  test('121 should be a palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('1231 should not be a palindrome', () => {
    expect(isPalindrome(1231)).toBe(false);
  });

  test('4444444 should be a palindrome', () => {
    expect(isPalindrome(4444444)).toBe(true);
  });

  test('1 should be a palindrome', () => {
    expect(isPalindrome(1)).toBe(true);
  });

  test('12 should not be a palindrome', () => {
    expect(isPalindrome(12)).toBe(false);
  });
});
