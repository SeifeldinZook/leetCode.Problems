/* 
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. 
*/

var canConstruct = function (ransomNote, magazine) {
  let ransomNoteMap = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteMap.get(ransomNote[i])) {
      ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1);
    } else {
      ransomNoteMap.set(ransomNote[i], 1);
    }
  }

  let magazineMap = new Map();
  for (let j = 0; j < magazine.length; j++) {
    if (magazineMap.get(magazine[j])) {
      magazineMap.set(magazine[j], magazineMap.get(magazine[j]) + 1);
    } else {
      magazineMap.set(magazine[j], 1);
    }
  }

  console.log(ransomNoteMap, magazineMap);
  canConstructed = true;
  ransomNoteMap.forEach(function (value, key) {
    if (
      (!magazineMap.has(key) || magazineMap.get(key) < value) &&
      canConstructed
    ) {
      canConstructed = false;
    }
  });

  return canConstructed;
};
