const accountId = 144553;
let accountEmail = "Koushik@gmai.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

// accountId = 2;

accountEmail = "kd89601@gmail.com";
accountPassword = "rollsroy4u";
accountCity = "Bangaluru";

console.log(accountId);

/*
    perfer not to use var
    because of issue in block scope and funtional scope

*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

function quiz() {
  const x = 10;
  delete x;
  return x;
}

console.log(quiz());
