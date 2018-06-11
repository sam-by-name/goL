// Live cell fewer than two live neighbors dies
// Live cell with two or three live neighbors lives
// Live cell with more than three live neighbors dies
// Dead cell with three live neighbors becomes a live cell

const arr = require('./board.js')
const newArr = require('./boardShow.js')
let clear = require('clear')
// const box = require('./blessed.js')
// const blessed = require('blessed')

function gameStart () { // Where it all begins
  scanner()
}
// checks first arr for alive cells
// let prints = 0
function scanner (i, j, prints) {
  print()
  for (let t = 0; t < 10000; t++) {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        countSur(i, j)
      }
    }
    print()
    updateArr()
  }
  // if (prints <= 5) {
  //   prints++
  //   scanner(prints)
  // }
}
function updateArr () {
  for (let z = 0; z < 11; z++) {
    for (let c = 0; c < 411; c++) {
      arr[z][c] = newArr[z][c]
    }
  }
}

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
}

function lifeOrDeath (y, j, surrounds) {
  if ((arr[y][j] === 0) && (surrounds === 3)) { //        If cell is dead and surrounds are exactly 3
    (newArr[y][j] = 1) //                                 cell is born / scanner starts on the next cell
  } else if ((surrounds < 2) || (surrounds > 3)) { //     If cel has less than 2 around it
    (newArr[y][j] = 0) //                                 cell ends itself due to loneliness / scanner starts on the next cell
  } else if ((arr[y][j] === 1) && (surrounds === (2 || 3))) { // If cell is alive and has 2/3 surroundsing friends
    (newArr[y][j] = 1) //                                 cell lives for another day / scanner starts on the next cell
  }
}

// function print () {
//   for (let f = 0; f < 12; f++) {
//     show(newArr[f])
//   }
//   clear()
//   show('\n')
// }

function print () {
  let str = ''
  for (let f = 0; f < 12; f++) {
    for (let d = 0; d < 12; d++) {
      if (newArr[f][d] === 0) {
        str += '  '
      } else {
        str += '@ '
      }
    }
    str += '\n'
  }
  // box(str)
  console.log(str)
  clear()
}

gameStart()

module.exports = {
  gameStart,
  countSur,
  lifeOrDeath,
  scanner
}
