// Cho biến numbers là một mảng chứa các giá trị số bất kì. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers
let array1 = [1, 2, 3, 0, 9];
const sum = (arr) => {
  return arr.reduce((s, num) => s+num, 0)
}
console.log(sum(array1));

//58.2
// Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs
let array2 = [1, 2, 3, 2, "NaN"];
const sumNumbers = (arr) => {
  return arr.filter((item) => Number(item))
            .reduce((s, item) => s+item, 0)
}
console.log(sumNumbers(array2));

//60.1
// Cho trước biến courses có định dạng như sau:
// Yêu cầu
// Trả về tổng coin của toàn bộ các khóa học

let arr601 = [
  { name: 'Javascript', coin: 1000 },
  { name: 'PHP', coin: 1200 },
  { name: 'Dart', coin: 1400 }
]
const sumCoin = (arr) => {
  return arr.reduce((s, {coin}) => s + coin, 0);
}
console.log(sumCoin(arr601));