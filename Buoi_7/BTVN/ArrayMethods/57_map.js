// 57.1
// Cho trước hàm convertToBoolean có tham số inputs là một array gồm các phần tử có giá trị bất kì. Ví dụ:

// [1, 'hi', false, 8, undefined, '', NaN]
// Yêu cầu
// Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean

let inputs = [1, 'hi', false, 8, undefined, '', NaN];
const convertToBoolean = (inputs) => {
  return inputs.map(ele => Boolean(ele))
}
console.log(convertToBoolean(inputs));


// 57.2
// Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì. Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.
let inputs2 = [1, 2, 3, 4, -8, 0];
const run = inputs2.map(ele => ele *3);
console.log(run);

// Cho trước hàm convertToNumber và tham số inputs là một mảng gồm nhiều chuỗi chữa các số tương tự như sau:

// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToNumber trả về một array mới từ array inputs, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu number.
let inputs3 = ['1', '2', '3', '2.2', '4', '10']
const convertToNumber = (inputs) => {
  return inputs.map(ele => Number(ele))
}
console.log(convertToNumber(inputs3));

// 57.4
// Cho trước hàm convertToString và tham số numbers là một mảng gồm nhiều các số tương tự như sau:

// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToString trả về một array mới từ array numbers, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu string.
let inputs4 = [ 1, 2, 3, 2.2, 4, 10 ]
const convertToString = (numbers) => {
  return numbers.map(ele => ele.toString())
}
console.log(convertToString(inputs4));