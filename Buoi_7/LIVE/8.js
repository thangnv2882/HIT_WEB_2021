let a = [1, 2, 3];

// for (let index = 0; index < a.length; index++) {
//   console.log(a[index]);
// }
// a.forEach(x => {
//   console.log(x);
// });

// function x2(num) {
//   return num*2;
// }
// // console.log(x2(2));
// let result = a.map(x2);
// console.log(result);


function reduceNum(a, b) {
  return a+b;
}
console.log(a.reduce(reduceNum, 0));


