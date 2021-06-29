const length_of_longest_substring = function (arr, k) {
  // TODO: Write your code here
  let max = 0;
  let start = 0;
  let end = 0;
  let maxOnes = 0; // 0's replaced with 1's
  while (end < arr.length) {
    const curr = arr[end];
    if (curr === 1) {
      maxOnes++;
    }
    if (end - start + 1 - maxOnes > k) {
      if (arr[start] === 1) {
        maxOnes--;
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max;
};

length_of_longest_substring([0, 0, 1], 2); // 3
length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2); // 6
length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3); // 9

/**
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, 
find the length of the longest contiguous subarray having all 1s.

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
**/
