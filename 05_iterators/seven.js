const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tenAdd = myNumbers.map((num) => num + 10);

const newNums = myNumbers.map((num) => num * 10).filter((num) => num < 80);

console.log(newNums);
