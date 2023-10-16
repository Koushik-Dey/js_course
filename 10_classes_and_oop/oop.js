const user = {
    username:"koushik",
    loginCount:8,
    signedIn:true,

    getuserDetails:function(){
       // console.log("Got user details from database")
    //    console.log(`Username:${this.username}`)
    console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getuserDetails())

// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function Employee(username,loginCount,isloggedIn) {
    this.username= username,
    this.loginCount = loginCount,
    this.isloggedIn = isloggedIn

    this.greetings= function () {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const employeeOne = new Employee("Koushik",12,true)
const employeeTwo = new Employee("hitesh" , 12,true)

console.log(employeeOne.constructor)
// console.log(employeeTwo.greetings())