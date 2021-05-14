// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP

const max_sub_array_of_size_k = (k, arr) => {
  let max = 0;
  let curr = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    // print the window
    curr += arr[end];
    if (end >= k - 1) {
      max = Math.max(curr, max);
      curr -= arr[start];
      start += 1;
    }
  }
  return max;
};

console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);
