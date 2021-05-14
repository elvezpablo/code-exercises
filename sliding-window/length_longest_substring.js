const longest_consecutive_no_repeat = (str) => {
  let max = 0;
  let count = 0;
  let prev = "";
  for (let i = 0; i < str.length; i++) {
    if (prev !== str[i]) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(count, max);
    prev = str[i];
  }
  return max;
};

// console.log(longest_consecutive_no_repeat_substring("pwwkew"));
// console.log(longest_consecutive_no_repeat_substring("pwwkewtyuawvvvvv"));

const longest_no_repeat = (str) => {
  let max = 0;
  let uniques = [];

  for (let i = 0; i < str.length; i++) {
    console.log(i);
    const curr = str[i];
    if (uniques.includes(curr)) {
      //   while (uniques.includes(curr)) {
      uniques.shift();
      //   }
      console.log(uniques);
      i--;
      console.log("-", i);
    } else {
      max = Math.max(max, uniques.length);
      uniques.push(curr);
    }
  }
  return max;
};
/* 
    NOTE this solution is the one on the article and it has a bug
    the leftWindow needs to keep collapsing until there are no more duplicates
*/
var lengthOfLongestSubstring = function (s) {
  let leftWindow = 0;
  let longest = 0;
  let counts = {};

  for (let rightWindow = 0; rightWindow < s.length; ) {
    if (!counts[s[rightWindow]]) {
      counts[s[rightWindow]] = 0;
    }

    counts[s[rightWindow]] += 1;

    if (Object.values(counts).some((element) => element > 1)) {
      counts[s[leftWindow]] -= 1;
      leftWindow += 1;
    }

    longest = Math.max(longest, rightWindow - leftWindow + 1);
    rightWindow += 1;
  }

  return longest;
};

console.log("expect 3: ", longest_no_repeat("pwwakwewl"));
console.log("expect 3: ", lengthOfLongestSubstring("pwwakwewl"));
