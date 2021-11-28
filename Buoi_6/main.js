// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x, y, z);
// console.log(typeof x);


// //OBJECT
// const person = {
//   // key: value;
//   name: "Thang",
//   age: 19,
//   isSingle: true,
//   hi: function(){},
//   birthday: {
//     day: 28,
//     month: 8,
//     year: 2002
//   }
// }
// // const person = new Person();

// console.log(person['name']);
// console.log(person.age);

// //Thay doi gia tri
// person.name = "Thang da thay doi";
// console.log(person['name']);

// // ARRAY
// function add(a, b) {
//   return a+b;
// }
// console.log("Tong = " + add(1, 3));

// //ES5
// var x = 1;

// //var = function scope 
// //let, const = block scope
// function hi() {
//   for(var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); //i được truy cập trong hàm "hi"
//   console.log(i);
// }
// hi();
// // console.log(name);

// // ES6
// // let y = 2;
// // const z = 3;


var name = "Duo";

// console.log(window);

// let a = 1;
// function add() {
//   return a++;
// }
// // add();
// console.log(a);
// console.log(add(a));
// console.log(add());

//Giống nhau
let person = {
  name: 'John',
}
let person1 = person;
person1.name = 'Trung';
console.log("Person 1: " + person1.name);
console.log("Person 2: " + person.name);

//Khác nhau
let a = 1;
let b = a;
b = 3;
console.log(a);
console.log(b);

function hi(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

let personObj1 = {
  name: "Alex",
  age: 30,
}

const personObj2 = hi(personObj1);

console.log(personObj1);
console.log(personObj2);
