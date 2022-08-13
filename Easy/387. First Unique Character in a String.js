/* 
387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

var firstUniqChar = function (s) {
  let letters = new Map();

  for (let i = 0; i < s.length; i++) {
    let letterValueInLetters = letters.get(s[i]);

    if (letterValueInLetters) {
      letterValueInLetters++;
      letters.set(s[i], letterValueInLetters);
    } else {
      letters.set(s[i], 1);
    }
  }

  console.log(letters);
  let firstNonRepeatingCharacter = "";
  letters.forEach(function (value, key) {
    if (value === 1 && firstNonRepeatingCharacter === "") {
      firstNonRepeatingCharacter = key;
    }
  });

  console.log(firstNonRepeatingCharacter);
  if (firstNonRepeatingCharacter !== "") {
    return s.indexOf(firstNonRepeatingCharacter);
  }

  return -1;
};
