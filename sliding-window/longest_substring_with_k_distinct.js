const longest_substring_with_k_distinct = function (str, k) {
  let start = 0;
  let end = 0;
  let max = 0;
  const freq = new Map();

  while (end < str.length) {
    if (freq.size > k) {
      const left = str[start];

      freq.set(left, freq.get(left) - 1);

      if (freq.get(left) === 0) {
        freq.delete(left);
      }
      start++;
    } else {
      const right = str[end];
      if (!freq.has(right)) {
        freq.set(right, 0);
      }
      freq.set(right, freq.get(right) + 1);
      end++;
    }

    max = Math.max(max, end - start);
  }

  return max;
};
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
); // 4
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
); // 2
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
); // 5
