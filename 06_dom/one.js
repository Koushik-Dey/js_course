let title = document.getElementById("title");
// let title = document.getElementById("title").className;
// let title = document.getElementById("title").getAttribute("class");
// let title = document
//   .getElementById("title")
//   .setAttribute("class", "test heading");

// title.style.backgroundColor = "red";

// console.log(title);

title.style.backgroundColor = "green";
title.style.padding = "20px";
title.style.borderRadius = "20px";

console.log(title.textContent); // it will show the hidden text or something that not present in the dom

console.log(title.innerHTML); // it will gives you the html code

console.log(title.innerText); // it will show the text present in the dom

let heading = document.getElementsByClassName("heading");
let input = document.querySelector("input[type=password]");

let myUl = document.querySelector("ul");

let myLI = myUl.querySelector("li");

// myLI.style.backgroundColor = "Green";
// myLI.style.padding = "10px";

// console.log(input);

// console.log(heading);

let allLi = document.querySelectorAll("li");

allLi.forEach((li) => {
  li.style.color = "green";
  li.style.padding = "10px";
});

let headingOne = document.querySelectorAll("h1");

// console.log(headingOne);

let classlist = document.getElementsByClassName("list-item");

let convertedArr = Array.from(classlist);

convertedArr.forEach((li) => {
  li.style.color = "orange";
});

console.log(convertedArr);

let allh2 = document.querySelectorAll("h2");

allh2.forEach((heading) => console.log(heading.innerText));

// console.log(textOfAllh2);
