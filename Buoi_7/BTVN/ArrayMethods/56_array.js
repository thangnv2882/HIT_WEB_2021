
//56.1
// Cho trước hàm getRequestBodyFromValues và tham số formValues, các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:
//Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. 
//Mỗi object chứa 2 keys là field và value.

// Input:
// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]
// Output:
// { name: 'Sơn Đặng', age: 18, address: 'Hà Nội' }

//Code 56.1
let formValues = [
  { field: 'name', value: 'Sơn Đặng' },
  { field: 'age', value: 18 },
  { field: 'address', value: 'Hà Nội' },
]
function getRequestBodyFromValues(formValues) {
  var kq = [];
  formValues.forEach(
    function(stt){
      return kq[stt.field] = stt.value;  
    }    
  );
  return kq;
}
console.log(getRequestBodyFromValues(formValues));


//56.2
// Cho trước hàm checkPositiveNumbers có tham số numbers sẽ nhận một mảng gồm các phần tử là những số bất kì. Hàm này được tạo ra với mục đích kiểm tra toàn bộ các chữ số trong mảng numbers có phải là số dương hay không.
// Yêu cầu
// Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ trả về true
// Nếu một trong các phần tử của mảng numbers không phải số dương hàm sẽ trả về false
// Ví dụ:

// Input: [1, 2, 3] - Output: true
// Input: [1, -8, 3] - Output: false
// Input: [-2, -6, 3] - Output: false

//Code 56.2
let arr = [1, 2, 3, 7];
const check = arr.every((ele) => {
  return ele > 0 ? true : false;
}) 
console.log(check);

// 56.3
// Cho hàm hasFreeCourses để kiểm tra một danh sách khóa học có khóa học nào miễn phí hay không.

// Cho biến courses là tham số của hàm trên, biến này là một array chứa nhiều object đại diện cho khóa học có định dạng như sau:


// Yêu cầu
// Hàm hasFreeCourses sẽ trả về true nếu đối số truyền vào có chứa khóa học miễn phí
// Hàm hasFreeCourses sẽ trả về false nếu đối số truyền vào không chứa khóa học miễn phí
let courses = [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
]
const isFree = courses.some((ele) => {
  return ele.vnd === 0 ? true : false;
})
console.log(isFree);

//56.4
// Cho trước biến monsters là một danh sách các con thú trong game có định dạng như sau:
// Yêu cầu
// Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước (Trả về thú đầu tiên tìm được)
// Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null

let monsters = [
  {
      name: 'Cá heo',
      attack: 50,
      speed: 100,
      hitpoint: 100,
  },
  {
      name: 'Khủng long',
      attack: 150,
      speed: 80,
      hitpoint: 180,
  }
]
const att1 = (monster) => {
  let kq = monster.find((ele)=> {
    return ele.attack === 150;
  });
  // console.log(kq);
  if(kq !== undefined){
    return kq;
  }
  else{
    return null;
  }
}
console.log(att1(monsters));

//56.5
// Cho trước hàm findStringsInArrayByKeyword và tham số thứ nhất có tên keyword sẽ là một chuỗi bất kỳ.

// Tham số thứ hai có tên strings sẽ là một array chứa các chuỗi bất kì, array này có định dạng như sau:

// Yêu cầu
// Trong hàm cho trước, hãy trả về một array mới gồm các phần tử trong array strings có chứa giá trị của biến keyword. Trường hợp không có phần tử phù hợp trả về mảng rỗng.

let arr5 = ['Javascript', 'PHP', 'Học PHP'];
const checkKey = (keyword, strings) => {
  return strings.filter((str) => str.includes(keyword)) || [];
}

console.log(checkKey("PHP", arr5));



//56.6
// Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.

// Yêu cầu
// Tạo hàm findEqualValues có hai tham số là array1 và array2 (Hai tham số này sẽ được test case tại F8 truyền đối số là các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
// Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới chứa các giá trị đó (mỗi giá trị là một phần tử trong array mới)
// Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng []
let a61 = [1, 2, 6, 8];
let a62 = [2, 9, 6];
const findEqualValues = (array1, array2) => {
  return array1.filter(arr => array2.includes(arr)) || [];
}
// console.log(equal(a61, a62));
console.log(findEqualValues(a61, a62));



