// const board = require('./board.js')

// let clear = require('clear')
// clear()

const x = 0

const arr = [
  [x, x, x, x, x, x, x, x, x, x, x, x],
  [x, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
  [x, x, x, x, x, x, x, x, x, x, x, x]
]

function gameStart () { // Where it all begins
  scanner()
}

let print = console.log(arr)

// Live cell fewer than two live neighbors dies
// Live cell with two or three live neighbors lives
// Live cell with more than three live neighbors dies
// Dead cell with three live neighbors becomes a live cell

// receives coordinates and checks all 8 surrounding cells
function countSur (y, j) {
  let surArr = [
    arr[y - 1][j - 1], arr[y - 1][j], arr[y - 1][j + 1],
    arr[y][j - 1], arr[y][j + 1],
    arr[y + 1][j - 1], arr[y + 1][j], arr[y + 1][j + 1]
  ]

  const reducer = (accu, cur) => accu + cur
  let surrounds = surArr.reduce(reducer)
  lifeOrDeath(y, j, surrounds)
  return surrounds
}

function lifeOrDeath (y, j, surrounds) {
  if (j === 11) {
    scanner((y + 1), 1)
  } else if ((arr[y][j] === 0) && (surrounds === 3)) {
    ((arr[y][j] = 1) && (scanner(y, j += 1)))// if cell is dead and surrounds are exactly 3, cell is born
  } else if (surrounds < 2) {
    ((arr[y][j] = 0) && (scanner(y, j += 1))) // cell dies, cell is lonely
  } else if ((arr[y][j] === 1) && (surrounds === (2 || 3))) {
    ((arr[y][j] = arr[y][j]) && (scanner(y, j += 1)))// cell survives
  } else if (surrounds > 3) {
    ((arr[y][j] = 0) && (scanner(y, j += 1))) // cell dies, depressed from lack of space
  }
  return arr[y][j]
}

// checks first arr for alive cells
function scanner (i, j) {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if ((arr[i][j]) === (0 || 1)) {
        countSur(i, j)
      }
    }
  }
  scanner()
}

module.exports = {
  gameStart,
  countSur,
  lifeOrDeath,
  scanner
}
