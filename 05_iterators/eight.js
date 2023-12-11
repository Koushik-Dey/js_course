const myNums = [1, 2, 3];

const total = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile course",
    price: 7999,
  },
  {
    itemName: "data science course",
    price: 7999,
  },
];

const totalPice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPice);
