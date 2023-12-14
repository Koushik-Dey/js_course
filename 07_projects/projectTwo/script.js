let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let results = document.querySelector("#results");

  if (height !== "" && weight !== "") {
    let bmi = (weight / height / height) * 10000;
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

    height = "";
    weight = "";
  } else {
    results.innerHTML = "Please enter valid values";
  }
});
