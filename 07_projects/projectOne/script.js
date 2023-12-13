const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    // console.log(e.target);
    // console.log(id);
    if (id == "grey") {
      document.body.style.backgroundColor = id;
    } else if (id == "white") {
      document.body.style.backgroundColor = id;
    } else if (id == "blue") {
      document.body.style.backgroundColor = id;
    } else if (id == "yellow") {
      document.body.style.backgroundColor = id;
    }
  });
});
