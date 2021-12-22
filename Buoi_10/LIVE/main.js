//Default parametter
const sum = (a = 1, b = 0) => a + b;
console.log(sum());
console.log(sum(2));
console.log(sum(2, 4));
console.log(sum(2, 3, 4, 5));

const getName = function (name = " Unknown", age, hihi) {
  return "I am" + name;
};
console.log(getName(1));
console.log(getName(" Thang", 20, "hahaha"));

// const names = ["duo", "hoang", "Hung"];
// const duo = names[0];

// console.log(duo);

const names = {
  name1: "thang",
  name2: "van",
  name3: "nguyen",
};

// const thang = names["name1"]
// const van = names["name2"]
// const nguyen = names["name3"]

// console.log(thang, van, nguyen);

// Destructuring
// const {name1: thang, name2: van, name3: nguyen} = names;
// console.log(duo, van, nguyen);

const person = {
  name: "thang",
  age: 19,
};
//Copy object: 3 cách
const another = {};
for (let key in person) {
  another[key] = person[key];
}
console.log(another);

const another1 = Object.assign(person, {});
console.log(another1);

//spread operator ~ for in
const another2 = { ...person };
console.log(another2);

const numbers = [1, 2, 3, 4, 5];
const nums = [4, ...numbers, 9];
console.log(nums);

//Rest operator != spread operator
const sum1 = (...nums) => {
  return nums.reduce((acc, cur) => acc + cur, 0);
};
console.log(sum1(1, 2, 3, 4, 5));

const restrictTo = (...roles) => {
  return (req, res) => {
    // req.user.role =  "admin" || "user"
    if(roles.includes(req.user.role)) {
      return next();
    }
    return Error(`unauthorize`)
  } 
}

restrictTo('admin', 'lead')
