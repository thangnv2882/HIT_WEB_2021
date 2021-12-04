const count = (nums) => {
  let map = {};
  for(const num of nums) {
    map[num] = map.hasOwnProperty(num) ? ++map[num] : 1;
  } 
  return map;
}
// Phương thức hasOwnProperty () trả về một boolean cho biết 
// liệu đối tượng có thuộc tính được chỉ định làm thuộc tính của chính nó hay không 

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
console.log(count(nums));
//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log(count(nums1));
//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
console.log(count(nums2));