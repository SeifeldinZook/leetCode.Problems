/* 1790. Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.



Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.


Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
 */

#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool areAlmostEqual(char *s1, char *s2)
{
  int countDiff = 0;
  char a;
  char b;
  for (int i = 0; s1[i] != '\0'; i++)
  {
    // printf("%c\n", s1[i]);
    if (s1[i] != s2[i])
    {
      countDiff++;
      if (countDiff == 2)
      {
        printf("%c, %c && %c, %c\n", s1[i], b, s2[i], a);
        printf("%d\n", s1[i] != b && s2[i] != a);
        if (s1[i] != b || s2[i] != a)
          return false;
      }
      a = s1[i];
      b = s2[i];
    }
  }

  if (countDiff == 0 || countDiff == 2)
    return true;

  return false;
}