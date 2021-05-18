var rob2 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  const houses = [];
  houses[0] = nums[0];
  houses[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    houses[i] = Math.max(nums[i] + houses[i - 2], houses[i - 1]);
  }
  return houses;
};

rob([1, 2, 3, 1]);
rob([1, 3, 4, 4, 3, 3, 7, 2, 3, 4, 5, 1]);

// https://medium.com/outco/how-to-solve-the-house-robber-problem-f3535ebaef1b
var robLinearSpace = function (houses) {
  let max_gold = [];

  for (let i = 0; i < houses.length; i++) {
    let current = houses[i];
    let prevMax = max_gold[i - 1] || 0;
    let twoBackMax = max_gold[i - 2] || 0;
    max_gold.push(Math.max(current + twoBackMax, prevMax));
  }

  return max_gold[houses.length - 1];
};

robLinearSpace([1, 2, 3, 1]);

// Constant Space

function robConstantSpace(houses) {
  let currentMax = 0;
  let prevMax = 0;

  for (let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse);
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
}
robConstantSpace([3, 5, 1, 3, 4, 5, 1]);
