// if

// const isUserloggedIn = true;
// const temerature = 51;

// if (temerature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temerature is greater than 50");
// }

// < , > , <= , >= , == , != , === , !==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"); //implicit scope

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const balance = 0;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged In");
}
