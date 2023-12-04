function sayMyName() {
  console.log("koushik");
}

// sayMyName();

function addTwoNumber(num1, num2) {
  //   console.log(parseInt(num1) + parseInt(num2));
  //   let result = num1 + num2;

  return num1 + num2;
}

const result = addTwoNumber(3, 8);

// console.log("Result : ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage());

function calculateCardPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
  username: "koushik",
  prices: 199,
};

function handleObj(obj) {
  console.log(`User name is ${obj.username} and price is ${obj.price}`);
}

// handleObj(user);
handleObj({
  username: "sam",
  price: 399,
});

const myArr = [200, 300, 400, 500];

function returnSecondValue(arr) {
  return arr[1];
}

console.log(returnSecondValue(myArr));
