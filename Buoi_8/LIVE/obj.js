const name = "Thang";
const age = 19;
const sayHi = function() {
  console.log("hihi");
};

// Basic
const person1 = {
  // property
  // key: value
  name: "Thang",
  age: 19,
  sayHi: function() {
    console.log("hihi");
  }
}
const person2 = {
  // property
  // key: value
  name: "Van",
  age: 19,
  sayHi: function() {
    console.log("hello");
  }
}

//Factory function
const createPerson = function(name, age) {
  return {
    name,
    age,
    sayHi() {
      console.log("hi");
    }
  }
}
const p1 = createPerson("Thang", 20);
console.log(p1);

//Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log("Hello World!");
  }
}
const person = new Person("Thang", "19...");
console.log(person);
console.log(person.constructor);
//three things happened
// new => {} <create>
// this point to this {} and excutive
// return above {}


//Truy suất tên thuộc tính của obj
p1.age
p1["age"];
console.log(p1["age"]);

//Thêm xoá thuộc tính
p1.handsome = true;
delete p1.sayHi;
console.log(p1);
console.log(p1.constructor);

for (const key in p1) {
  console.log(key);
}
for (const value of Object.values(p1)) {
  console.log(value);
}

//entries lấy cả key và values
for (const key of Object.entries(p1)) {
  console.log(key);
}
// const another = Object.assign({}, p1);
// console.log(another);
const another = new Object();
for (let key in p1) {
  another[key] = p1[key];
}
console.log("another: " + another);