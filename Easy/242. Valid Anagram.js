/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  /*
  while (s && t) {
    let currentLetterInS = s[0];
    let indexOfCurrentLetterInT = t.indexOf(currentLetterInS);
    
    if (indexOfCurrentLetterInT === -1) return false;

    s = s.slice(1); // remove from beginning
    t = t.slice(0, indexOfCurrentLetterInT) + t.slice(indexOfCurrentLetterInT + 1)
  }
  
  return true;
  */
  return s.split("").sort().join("") === t.split("").sort().join("");
};
