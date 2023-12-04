const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["spiderman", "Batman"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]);

// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(-1);
// myArr.shift();

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(4));

// const newArr = myArr.join(" ,");

// console.log(myArr);
// console.log(newArr);

//slice , splice

console.log("A", myArr);

const myArrOne = myArr.slice(1, 3);

console.log(myArrOne);

console.log("B", myArr);

console.log("A", myArr);

const myArrTwo = myArr.splice(2, 1);

console.log(myArrTwo);

console.log("c", myArr);
