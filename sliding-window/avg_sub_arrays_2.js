function find_averages_of_subarrays(K, arr) {
  const out = [];
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= K - 1) {
      out.push(sum / K);
      sum = sum - arr[start];
      start++;
    }
  }
  return out;
}

find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// [2.2, 2.8, 2.4, 3.6, 2.8]
