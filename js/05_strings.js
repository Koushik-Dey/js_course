const name = "koushik"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my name repo count is ${repoCount}`)

const gameName = new String("Koushik-ac-com")

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("u"))

let newString = gameName.substring(0 , 4)

console.log(newString)

const anotherString = gameName.slice(-8 , 4)

console.log(anotherString)

const strTrim = "   koushik@dev123   ";

console.log(strTrim.trim())

const url = "https://koushik.com/koushik%20dey"

const strReplace = url.replace("%20" , "-")

console.log(strReplace)

console.log(url.includes("koushik"))

console.log(gameName.split('-'))