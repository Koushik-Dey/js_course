const user = {
  username: "koushik",
  price: 999,

  welcomeMessage: function () {
    console.log(`Welcome to website ,${this.username}`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Rahul";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "koushik";
//   console.log(this.username); // we can't user this inside of a function this will only accessable in the object
// }

// chai();

// const chai = function () {
//   let username = "koushik";
//   console.log(this.username);
// };

const chai = () => {
  let username = "koushik";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2; //implicit return

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Koushik" });
console.log(addTwo(3, 4));

const myArr = [12, 3, 4, 5, 6, 7];

myArr.map((i) => console.log(i));
