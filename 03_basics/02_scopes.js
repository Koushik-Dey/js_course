//var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER : ", a);
}

// console.log(a);
// console.log(b);
// console.log(a);

//nested scope

function one() {
  const username = "koushik";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "koushik";
  if (username === "koushik") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ interesing +++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

addTwo(6);
const addTwo = function (num) {
  return num + 2;
};
