let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<p>Please enter a valid height ${height}</p>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<p>Please enter a valid weight ${weight}</p>`;
  } else {
    let bmi = (weight / height / height) * 10000;
    if (bmi <= 18.6) {
      results.innerHTML = `<p>under weight and bmi is${bmi.toFixed(2)}</p>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<p>Normal Range and bmi is${bmi.toFixed(2)}</p>`;
    } else {
      results.innerHTML = `<p>Overweight and bmi is ${bmi.toFixed(2)}</p>`;
    }
  }
});
