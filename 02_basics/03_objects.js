//singleton

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "koushik",
  fullName: "Koushik Dey",
  [mySym]: "myKey1",
  age: 22,
  location: "shyamnagar",
  email: "koushik@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["fullName"]);
console.log(typeof jsUser[mySym]);

jsUser.email = "koushik@chatGpt.com";

// Object.freeze(jsUser);

jsUser.email = "koushik@microsoft.com";

// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`Hello js user , ${this.fullName}`);
};

// console.log(jsUser.greeting());

jsUser.greeting();

jsUser.greetingTwo();
