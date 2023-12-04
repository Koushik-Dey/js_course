//singleton

// const tinderUser = new Object();
const tinderUser = {};

(tinderUser.id = "123abc"),
  (tinderUser.name = "Sammy"),
  (tinderUser.isloggedIn = false);

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Koushik",
      lastName: "Dey",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName);

const ObjOne = { 1: "a", 2: "b" };
const ObjTwo = { 3: "a", 4: "b" };
const ObjFour = { 5: "a", 6: "b" };

// const objThree = { ObjOne, ObjTwo };

// const objThree = Object.assign({}, ObjOne, ObjTwo, ObjFour);

const objThree = { ...ObjOne, ...ObjTwo };

// console.log(objThree);

const users = [
  {
    id: 1,
    email: "koushik@gmail.com",
  },
  {
    id: 2,
    email: "koushik@gmail.com",
  },
  {
    id: 3,
    email: "koushik@gmail.com",
  },
  {
    id: 4,
    email: "koushik@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedIn"));

const course = {
  courseName: "javascript",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: instructor, courseName, price } = course;

console.log(instructor);

// {
//   "name": "koushik",
//     "course": "javascript",
//       "price":"free"
// }

[{}, {}];
