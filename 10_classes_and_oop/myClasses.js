//ES6

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.score = 0;
//   }

//   encrytPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.name.toUpperCase()}`;
//   }
// }

// const userOne = new User("Koushik", "koushik@gamil", "koushik@132");

// console.log(userOne.encrytPassword());
// console.log(userOne.changeUserName());

//behind the scene

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.score = 0;
}

User.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.name.toUpperCase()}`;
};

const tea = new User("koushik", "koushik@gamil", "koushik@132");

console.log(tea.encrytPassword());
console.log(tea.changeUserName());
