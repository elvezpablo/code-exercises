/*
Given a matrix of values 0 or 1, where 0 represents water, and 1 represents land, 
find the number of land masses. Land masses are connected orthogonally (vertically 
or horizontally, not diagonally).

For example, give the following:

0 1 0 0 0
0 1 1 1 1
0 1 1 0 0
0 0 1 0 0
1 0 0 0 0

There are 2 land masses in the above matrix.

The matrix is expected to be rectangular, so each row and column will be the same 
length as other rows/columns.
**/

// const ary = [
//   [0, 1, 0, 0, 0],
//   [0, 1, 1, 1, 1],
//   [0, 1, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0]
// ]

const small = [
  [1, 0],
  [1, 0],
];

let land = [];
const deltas = [[0, 1], [0, -1], [1, 0], [-1,0]];

for (let x = 0; x < small.length; x++) {
  for (let y = 0; y < small[x].length; y++) {
    console.log(x, y, ' value: ', small[x][y]);
    if (small[x][y]) {
      land.push([x, y]);      
      while(land.length) {
        delta.forEach(([dx, dy]) => {
        if(small[x+dx][y+dy]) {
          land.push([x+dx, y+dy]);  
        }        
      });  
      }
    }
  }
}

console.log(land);
