// https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr

const avg_sub_arr = (size, arr) => {
  const out = [];
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= size - 1) {
      // console.log(sum / size);
      out.push(sum / size);
      sum -= arr[start];
      start++;
    }
  }
  return out;
};

console.log(avg_sub_arr(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8
