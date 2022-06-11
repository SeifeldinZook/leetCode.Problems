/*
1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers 
between low and high (inclusive).

Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

Constraints:
0 <= low <= high <= 10^9
*/

// Solution Exceeds the number of operations
int countOdds(int low, int high) {  
  int count = 0;
  for (int i = low; i <= high; i++) {
    if (i % 2 != 0){
        count++;
    }
  }

  return count;
}

int countOdds(int low, int high) {
  int base = high - low + 1;
  int count_of_odd_numbers = base / 2;
  if ((base % 2 != 0) && ((low % 2 != 0) || (high % 2 != 0))) {
    count_of_odd_numbers++;
  }

  return count_of_odd_numbers;
}