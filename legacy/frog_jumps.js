function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let value = 0;
  const pairs = [];
  for (let i = 0; i < A.length; i++) {
    const curr = A[i];
    const exists = pairs.indexOf(curr);

    if (exists >= 0) {
      value = value - curr;
      pairs.splice(exists, 1);
    } else {
      value = value + curr;
      pairs.push(curr);
    }
  }
  return value;
}

solution([9, 3, 9, 3, 9, 7, 9]);
