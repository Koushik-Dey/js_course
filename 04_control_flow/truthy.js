const userEmail = [];

if (userEmail) {
  console.log("Email found");
} else {
  console.log("Email not found");
}

// falsy values

// flase , 0 , -0 , 0n ,"" , null, undefined , NaN

//truthy values

// "0" , "false" , -1 , 1 , " " , [] , {} , function(){}

// if (userEmail.length === 0) {
//   console.log("Email not found");
// } else {
//   console.log("Email found");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}

// false === 0 => true
//false == "" => true
// 0 == "" => true

// Nullish coalescing operator (??): null or undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 15;
val = null ?? 10 ?? 20;
// console.log(val);

//Ternary operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80
  ? console.log("Discount available")
  : console.log("Discount not available");
