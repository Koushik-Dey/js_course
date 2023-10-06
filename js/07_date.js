//Dates

let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// let myCreateDate = new Date(2023 ,1 , 23 )
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")

// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.round(Date.now() / 1000))

let newDate = new Date()

console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getMonth())

newDate.toLocaleString("default" , {
    weekday: "long",

})