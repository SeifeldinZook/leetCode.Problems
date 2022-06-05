/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void reverseString(char* s, int sSize) {
  char temp;
  for (int i = 0; i < sSize/2; i++) {
    temp = s[i];
    s[i] = s[sSize - i - 1];
    s[sSize - i - 1] = temp;
  }
}

int main () {
  char s[] = {'h','e','l','l','o'};
  reverseString(s, 5);

  for (int i = 0; i < 5; i++)
  {
    printf("%c,", s[i]);
  }
}