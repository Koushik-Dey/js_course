let myName = "koushik   "
let myChannel = "coffe  "



// console.log(myName.trueLength)


let myHeroes = ['thor',"spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.koushik = function () {
    console.log(`koushik is present in all object`)
}

Array.prototype.heyKoushik = function () {
    console.log(`Koushik say hello to all`)
}


// heroPower.koushik()
myHeroes.koushik()

myHeroes.heyKoushik()

// heroPower.heyKoushik()


//inheritance

const User = {
    name:"koushik",
    isLoggedIn:true,
    email:"kd@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignMent:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()

"koushik".trueLength()
"tea".trueLength()