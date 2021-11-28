const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

// 1. Tạo menu với các mục xem danh sách, thêm người dùng
console.log(`-----MENU-----
1. Xem danh sách
2. Thêm người dùng
3. Xoá người dùng theo id
4. Cập nhật thông tin người dùng theo id`);
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
function show() {
  users.forEach(element => {
    console.log(element);
  });
}
console.log("Users: ");
show();

const newUser = {
  id: 5,
  name: "Van Thang",
  age: 19,
  gender: "male",
  money: 1500
}
function addUser(newUser) {
  users.push(newUser)
}
addUser(newUser);
console.log("Users sau khi thêm: ");
show();


function deleteUser() {
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == 3) {
      users.splice(i, 1);
      break;
    }
  }
}
deleteUser();
console.log("Users sau khi xoá: ");
show();

const userUpdate = { 
  id: 100, 
  name: "Rich kid", 
  age: 19, 
  gender: "female", 
  money: 3000 
}
function updateUser() {
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == 2) {
      users[i] = userUpdate;
    }
  }
}
updateUser();
console.log("Users sau khi update:");
show();

// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
const newUser1 = {
  id: 6,
  name: "User 6",
  age: 6,
  gender: "male",
  money: 2000
}
const newUser2 = {
  id: 7,
  name: "User 7",
  age: 18,
  gender: "male",
  money: 2500
}
addUser(newUser1);
addUser(newUser2);
console.log("Đã thêm 2 người vào mảng");
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
function countMale(arr) {
  let cnt = 0;
  arr.forEach(element => {
    if(element.gender === "male") {
      cnt++;
    }
  })
  return cnt;
}
function countAge(arr) {
  let cnt = 0;
  arr.forEach(element => {
    if(element.age > 15) {
      cnt++;
    }
  })
  return cnt;
}
console.log(`Số người giới tính nam: ${countMale(users)}`);
console.log(`Số người có tuổi lớn hơn 15: ${countAge(users)}`);

// - Tính tổng tiền những người có id chẵn
function SumMoney(arr) {
  let sum = 0;
  arr.forEach(element => {
    if(element.id % 2 == 0) {
      sum += element.money;
    }
  })
  return sum;
}
// show();
console.log(`Tổng tiền những người có id chẵn: ${SumMoney(users)}`);

// - Ai nghèo nhất, Ai giàu nhất
function CompareMoney(arr) {
  let vt_max = vt_min = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].money > arr[vt_max].money) {
      vt_max = i;
    }
    if(arr[i].money < arr[vt_min].money) {
      vt_min = i;
    }
  }
  console.log(`Nguoi giau nhat la:`);
  console.log(arr[vt_max]);
  console.log(`Nguoi ngheo nhat la:`);
  console.log(arr[vt_min]);
} 
CompareMoney(users);

// 3. Chuyển hết những người có giới tính male về female
function changeGender(arr) {
  arr.forEach(element => {
    if(element.gender === "male") {
      element.gender = "female";
    }
  })
}
console.log("Chuyển hết những người có giới tính male về female:");
changeGender(users);
show();