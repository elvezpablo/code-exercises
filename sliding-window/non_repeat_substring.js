/**
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.


Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
**/

const fruits_into_baskets = function (fruits) {
  let max = 0;
  let end = 0;
  const basket = [];
  let types = 0;

  while (end < fruits.length) {
    if (types > 2) {
      basket.shift();
      types--;
    } else {
      const curr = fruits[end];
      if (!basket.includes(curr)) {
        types++;
      }
      basket.push(curr);
      max = Math.max(max, basket.length);
      end++;
    }
  }
  return max;
};

fruits_into_baskets(['A', 'B', 'A', 'B']); // 4
fruits_into_baskets(['A', 'B', 'C', 'A', 'C']); // 3
fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']); // 5

// interestingly the educative.io solved it using the K distinct chars approach with
// only one line different 

function fruits_into_baskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    // the following is the only difference be
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
