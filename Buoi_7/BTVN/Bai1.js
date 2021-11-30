// Mẫu
// const count = (nums) => {
//   let map = {};
//   for(const num of nums) map[num] = map.hasOwnProperty(num) ? ++map[num] : 1;
//   return map;
// }

function dem(array) {
  let sl = new Array();
  for(let value of array) {
    sl[value] = 0;
  }
  for(let value of array) {
    sl[value]++;
  }
  for(let value in sl) {
    console.log(`Số ${value} xuất hiện ${sl[value]} lần.` );
  }
}  

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
console.log("Case 1");
dem(nums);
//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log("Case 2");
dem(nums1);
//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
console.log("Case 3");
dem(nums2);