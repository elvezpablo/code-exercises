const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  8: 'wxyz',
};

let digits = '2345';
// output
// ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let output = map[parseInt(digits[0])].split('');

  for (let i = 1; i < digits.length; i++) {
    const letters = map[parseInt(digits[i])];
    const temp = [];
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < output.length; k++) {
        temp.push(output[k] + letters[j]);
      }
    }
    output = temp;
  }
  return output;
};

letterCombinations(digits);
