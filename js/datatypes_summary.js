//+++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , Heap(Non-Primitive)

let myName = "Koushik"

let anotherName  = myName
anotherName = "Rahul"

console.log(myName)
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "koushik@gmail.com"

console.log(userOne)
console.log(userTwo)