// import prompt lib
const prompt = require("prompt-sync")({ signint: true, eot: true })

const currency = [100, 20, 10, 5, 1]

const n = prompt("Input : ")

// Number Only
if (isNaN(n)) {
  console.error("Invalid Input : Only Number")
  process.exit(1)
}

let def = currency[0]

// initial biggest viable currency
function getInitial(input) {
  if (input >= def) {
    return def
  } else {
    def = currency[currency.indexOf(def) + 1]
    return getInitial(input)
  }
}

// initialte initial currency
let initial = getInitial(n)

let cal = n
let count = 0

while (cal > 4) {
  if (cal > initial) {
    cal -= initial
  } else {
    //get biggest currency vialbe
    initial = getInitial(cal)
    cal -= initial
  }
  count++
}

// finalize count + remaining cal < 1 currency>
count += cal

console.log(`Output :  ${count}`)
