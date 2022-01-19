const prompt = require("prompt-sync")({ signint: true, eot: true })

const n = prompt("Input : ")

if (n.split(" ").length !== 4) {
  console.error(
    "Invalid Input : format 4 length string with <spacing> eg. '5 5 3 2'"
  )
  process.exit()
}

const [N, A, B, C] = n.split(" ")

const toCalc = [A, B, C]

const res = new Array(toCalc.length)

for (let i = 0; i < res.length; i++) {
  let totalStick = N
  let count = 0
  for (let j = i; j < toCalc.length; j++) {
    // break if totalStick reach 0
    if (totalStick <= 0) {
      break
    } else {
      // break if no more viable path
      if (
        totalStick < toCalc[0] &&
        totalStick < toCalc[1] &&
        totalStick < toCalc[2]
      ) {
        break
      }
      // result
      if (totalStick >= toCalc[j]) {
        totalStick % toCalc[j] == 0
          ? (() => {
              count += totalStick / toCalc[j]
              totalStick = 0
            })()
          : (() => {
              totalStick -= toCalc[j]
              count++
            })()
      }
    }
    // index loop
    if (j + 1 >= 3) {
      j = -1
    }
  }

  res[i] = {
    total: count,
  }
}

const [a, b, c] = [res[0].total, res[1].total, res[2].total]

// result
console.log(`Output : ${Math.max(a, b, c)}`)
