// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên
//trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// let str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1

const duplicate = (str) => {
  for (const i in str) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
};

let str = "tranduong";
let str1 = "hitclubhiuhiu";
let str2 = "aabb";
// duplicate(str);

console.log(duplicate(str));
console.log(duplicate(str1));
console.log(duplicate(str2));
