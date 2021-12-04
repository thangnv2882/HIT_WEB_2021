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

const show = (user) => console.log(user);
console.log("Users: ");
show(users);

const newUser = {
  id: 5,
  name: "Van Thang",
  age: 19,
  gender: "male",
  money: 1500
}
const addUser = (newUser) => users.push(newUser)
addUser(newUser);
console.log("Users sau khi thêm: ");
show(users);


const deleteUser = (userId) => {
  return users.filter((user) => user.id !== userId)
}

console.log("Users sau khi xoá: ");
show(deleteUser(3));

const userUpdate = { 
  id: 100, 
  name: "Rich kid", 
  age: 19, 
  gender: "female", 
  money: 3000 
}
const updateUser = (id, userUpdate) => {
  return users.map((user) =>
      user.id === id ? { ...user, ...userUpdate } : user
  );
};
console.log("Users sau khi update:");
console.log((updateUser(4, userUpdate)));

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
show(users);
console.log("Đã thêm 2 người vào mảng");

const statUsers = (users) => {
  const stat = { nam: 0, teen: 0 };

  users.map((user) => {
      if (user.gender === "male") ++stat.nam;
      if (user.age >= 15) ++stat.teen;
  });
  return stat;
};
console.log(statUsers(users));

// - Tính tổng tiền những người có id chẵn
const calcTotalMoney = (users) => {
  return users.reduce(
      (acc, { id, money }) => (id % 2 === 0 ? acc + money : acc),
      0
  );
};
console.log(calcTotalMoney(users));

// - Ai nghèo nhất, Ai giàu nhất
const compareMoney = (user) => {
  let max = Math.max(...users.map(element => element.money));
  let min = Math.min(...users.map(element => element.money)); 
  users.forEach(element => {
    if (element.money === max) {
      console.log(`${element.name} is rich`);
    }
    if (element.money === min) {
      console.log(`${element.name} is poor`);
    }
  })
} 
compareMoney(users);

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