const user = {
  username: "Koushik",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(this);
// this keyword in node environment is global object and return empty object. but in browser it will return window object.
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Koushik", 8, true);
const userTwo = new User("Rahul", 11, false);

console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userTwo);
