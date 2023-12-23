let myName = "koushik   ";
let myChannel = "coffe";

// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman", "ironman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.myMethod = function () {
  console.log("I am a method");
};

// heroPower.myMethod();
// myHeros.myMethod();

Array.prototype.sayHello = function () {
  console.log(`Koushik says hello`);
};

// heroPower.sayHello();
// myHeros.sayHello();

const User = {
  name: "Koushik",
  email: "example@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASuport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Koushik     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"Rahul  ".trueLength();
"Abir  ".trueLength();
