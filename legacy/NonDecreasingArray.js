// Given a number N, create a game board of N x N, with values 1 to N in
// each spot where no row or column has a duplicate value.

// Example:

// [
//   [1, 2, 3],
//   [2, 3, 1],
//   [3, 1, 2],
// ];

// const board = (N) => {
//   const rows = [];
//   for (let i = 0; i < N; i++) {
//     const cols = [];
//     for (let j = 0; j < N; j++) {
//       const val = Math.floor((j + i) % N) + 1;
//       cols.push(val);
//     }
//     rows.push(cols);
//   }
//   return rows;
// };

// board(5);
