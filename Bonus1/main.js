// BAT DONG BO
// asynchronous js: bat dong bo
// most use case of asynchronous js to fetch data from server
// read/write file <file system>
// const { log } = require("console");

const { log } = require("console");
const fs = require("fs"); //file system (gọi module)

fs.readFile("input.txt", (err, data) => {
  console.log(data);
});
console.log("reading...");






// DONG BO
// synchronous js: dong bo
// executed line by line: Bien dich tu tren xuong duoi (tung dong mot)
const name = "thang";

console.log(name);

const sayHi = () => {
  console.log(`Hi ${name}`);
};

sayHi();

// const result = fs.readFileSync('./input.txt', "utf-8")
// console.log(result);
// const data = "ghi file ne";
// fs.writeFileSync("output.txt", data);
// console.log("write");