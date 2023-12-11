const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((element, index, arr) => {
//   console.log(element, index, arr);
// });

let myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "java",
    languageFileName: "java",
  },
  {
    language: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((element, index, arr) => {
  console.log(element.languageFileName);
});
