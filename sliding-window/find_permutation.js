const find_permutation = function (str, pattern) {
  let end = 0;
  let found = [];

  while (end < str.length) {
    const curr = str[end];
    // current is in the pattern
    if (pattern.indexOf(curr) > -1) {
      if (found.length === 0) {
        found.push(end);
        end++;
        continue;
      }
      if (found[found.length - 1] + 1 === end) {
        found.push(end);
      } else {
        found = new Array();
      }

      if (found.length === pattern.length) {
        return true;
      }
    } else {
      found = new Array();
    }

    end++;
  }
  return false;
};

find_permutation('oidbcaf', `abc`);
find_permutation('odicf', `dc`);
find_permutation('bcdxabcdy', `bcdxabcdy`);
find_permutation('aaacb', `abc`);

/**
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
**/
