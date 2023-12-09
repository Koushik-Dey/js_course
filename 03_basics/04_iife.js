// to avoid golbal scope polution,cause many time we face problems with the global scope variables.so that's why we use iffe

(function chai() {
  //named iife
  console.log(`DB connedted`);
})();

((name) => {
  console.log(`DB connected 2 ${name}`);
})("Koushik"); // iife doesn't know that where should it stop, for give a proper context use ";" at the end.
