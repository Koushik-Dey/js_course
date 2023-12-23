const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise consumed"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2 ");
    resolve();
  }, 1000);
}).then(() => console.log("Async Task 2 consumed"));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 3");
    resolve({ username: "Koushik", email: "kd@code.com" });
  }, 1000);
});

promiseThree.then((user) => console.log(user));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Koushik", password: "@123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => console.log(username))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "@123" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const req = await fetch("https://api.github.com/users/Koushik-Dey");
//     const res = await req.json();

//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

fetch("https://api.github.com/users/Koushik-Dey").then((res) =>
  res
    .json()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);
