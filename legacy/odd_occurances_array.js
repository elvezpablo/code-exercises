/**
Given a string, find the length of the longest substring, which has no repeating characters.


Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
**/

const non_repeat_substring = function (str) {
  let max = 0;
  let end = 0;
  const chars = [];
  while (end < str.length) {
    const curr = str[end];
    if (chars.includes(curr)) {
      chars.shift();
    } else {
      chars.push(curr);

      max = Math.max(max, chars.length);
      end++;
    }
  }
  return max;
};

non_repeat_substring('aabccbb'); // 3
non_repeat_substring('abbbb'); // 2
non_repeat_substring('abccde'); // 3
