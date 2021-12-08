// Câu 2: Cộng một đơn vị vào mảng số nguyên
let digits = [2, 2, 3, 2, 4, 7, 9, 4, 5, 6, 3, 4, 8, 1, 2, 3, 4, 5, 1, 2, 9];
// Output: [1, 2, 3, 2, 4, 7, 9,4, 5, 6, 3, 4, 8, 1,2, 3, 4, 5, 1,3,0]

let digits1 = [0];
// Output: [1]

let digits2 = [9];
// Output: [1,0]

const sum = (digit) => {
  for (let i = digit.length - 1; i >= 0; i--) {
    if (digit[i] == 9) {
      digit[i] = 0;
    } else {
      digit[i]++;
      return digit;
    }
  }
  return [1, ...digit];
};

console.log(sum(digits));
console.log(sum(digits1));
console.log(sum(digits2));
