// 7. Reverse Integer

/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int reverse(int x) {
  int reverse = 0;
  while (x != 0) {
    int pop = x % 10;
    if (reverse > INT_MAX/10 || (reverse == INT_MAX / 10 && pop > 7)) return 0;
    if (reverse < INT_MIN/10 || (reverse == INT_MIN / 10 && pop < -8)) return 0;

    reverse = (reverse * 10) + (x % 10);
    x /= 10; // x = x/10
  }
  return reverse;
}

// int reverse(int x) {
//   long res = 0;
//   while (x != 0) {
//       res = res * 10 + x % 10;
//       x = x / 10;
//   }
//   if (res < INT_MIN || res > INT_MAX) {
//       return 0;
//   } else {
//       return res;
//   }
// }

int main() {
  printf("reverse: %d\n", reverse(0));
}