/*
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
*/

const smallestSubArraySum = (arr, S) => {
  let smallest = arr.length;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; ) {
    sum += arr[end];
    if (sum >= S) {
      smallest = Math.min(smallest, end + 1 - start);
      sum = sum - arr[start];
      start++;
    }
    if (sum >= S) {
      sum -= arr[end];
    } else {
      end++;
    }
  }
  return smallest === arr.length ? 0 : smallest;
};

console.log('expect: 2', smallestSubArraySum([2, 1, 5, 2, 3, 2], 7));
console.log('expect: 1', smallestSubArraySum([2, 1, 5, 2, 8], 7));
console.log('expect: 3', smallestSubArraySum([3, 4, 1, 1, 6], 8));
