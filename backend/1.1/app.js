// import prompt lib
const prompt = require("prompt-sync")({ signint: true, eot: true })

// initiate prompt
const n = prompt("Input length <N> : ")

function errHandler(opCode) {
  switch (opCode) {
    case 0:
      console.error("Invalid Input : Number Only")
      break
    case 1:
      console.error("Invalid input : pebble count does not match")
      break
    default:
      console.error("Invalid Input")
      break
  }
  process.exit()
}

// verify n is number
if (isNaN(n)) {
  errHandler(0)
}

const pebble = prompt("Pebble : ")

// verify string matched with n
if (pebble.length !== parseInt(n)) {
  errHandler(1)
}

let res = 0

for (let i = 0; i < pebble.length; i++) {
  if (!pebble[i].match("^[R,G,B]")) {
    errHandler()
  }

  pebble[i] == pebble[i + 1] ? res++ : false
}

console.log(`Output : ${res}`)
