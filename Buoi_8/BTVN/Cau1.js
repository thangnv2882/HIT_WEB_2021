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
  let arr = [];
  for(let value of str) {
    arr[value] = 0;
  }
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        arr[str[i]] = 1;
      }
    }
  }
  for(let i in str) {
    if(arr[str[i]] === 0) {
      return i;
    }
  }
  return -1;
}
let str = "tranduong";
let str1 = "hitclubhiuhiu";
let str2 = "aabb";
// duplicate(str);

console.log(duplicate(str));
console.log(duplicate(str1));
console.log(duplicate(str2));