class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Hello ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, subject, password) {
    super(username);
    this.email = email;
    this.subject = subject;
    this.password = password;
  }

  addCourse() {
    console.log(`Adding course for ${this.username}`);
  }
}

const teacherOne = new Teacher(
  "koushik",
  "koushik@gmail",
  "maths",
  "koushik123"
);

const teacherTwo = new User("rahul");

teacherOne.addCourse();
teacherTwo.logMe();

console.log(teacherOne instanceof Teacher);
