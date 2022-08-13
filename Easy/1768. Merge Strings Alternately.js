/* 
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
 */

/*
var mergeAlternately = function(word1, word2) {
  const isWord1Shorter = word1.length > word2.length;
  let shortestWordlength = 0;
  let output = '';
  
  if (isWord1Shorter)
    shortestWordlength = word1.length;
  else
    shortestWordlength = word2.length;
  
  console.log(word1.slice(0, 1))
  for (let i = 0; i < shortestWordlength; i++) {
    currentWord1Letter = word1.slice(0, 1) // get the first letter only in word1
    currentWord2Letter = word2.slice(0, 1)
    output = output.concat(currentWord1Letter, currentWord2Letter)
    
    word1 = word1.slice(1, shortestWordlength);
    word2 = word2.slice(1, shortestWordlength);
  }
  
  if (isWord1Shorter)
    output = output.concat(word2);
  else
    output = output.concat(word2);
  
  return output;
};
*/

var mergeAlternately = function (word1, word2) {
  var mergedWords = "";
  while (true) {
    mergedWords = mergedWords.concat(word1[0], word2[0]);
    word1 = word1.slice(1);
    word2 = word2.slice(1);

    if (word1.length === 0) {
      return mergedWords.concat(word2);
    }

    if (word2.length === 0) {
      return mergedWords.concat(word1);
    }
  }
};
