const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "batman", "flash"];

// marvelHeroes.push(dcHeroes);

let allHeroes = marvelHeroes.concat(dcHeroes);

// console.log(allHeroes);

const allnewHeroes = [...marvelHeroes, ...dcHeroes];

// console.log(allnewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(3);

// console.log(realAnotherArray);

console.log(Array.isArray("koushik"));
console.log(Array.from("koushik"));
console.log(Array.from({ name: "koushik" })); //interesting

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
