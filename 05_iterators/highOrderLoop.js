const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
  //   console.log(greet);
}

//Maps

const map = new Map();

map.set("name", "Koushik");
map.set("Roll", 12);
map.set("section", "A");
map.set("section", "A");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, value);
}

// const myObj = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObj) {
//   //   console.log(key, ":-", value);
// }

//objects

const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObj) {
  //   console.log(`${key} short cut is for ${myObj[key]}`);
}

const programming = ["js", "ruby", "python", "cpp", "java"];

for (const key in programming) {
  //   console.log(`${key} : ${programming[key]}`);
}

//for in loop for map
for (const key in map) {
  console.log(key); //this will not work
}
