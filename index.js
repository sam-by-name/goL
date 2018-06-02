// Live cell fewer than two live neighbors dies
// Live cell with two or three live neighbors lives
// Live cell with more than three live neighbors dies
// Dead cell with three live neighbors becomes a live cell

// const board = require('./board.js')
let clear = require('clear')

const x = 0

const arr = [
  [x, x, x, x, x, x, x, x, x, x, x, x],
  [x, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, x],
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

// checks first arr for alive cells
let prints = 0

function scanner (i, j, prints) {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      countSur(i, j)
    }
  }
  print()
  // if (prints <= 5) {
  //   prints += 1
  //   scanner(prints)
  // } else { return }
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
  console.log(surrounds)
  lifeOrDeath(y, j, surrounds)
}

function lifeOrDeath (y, j, surrounds) {
  if (j === 10) { //                                             If end of row
    y += 1 //                                       go back to scanner and start on the next row
  } else if ((arr[y][j] === 0) && (surrounds === 3)) { //        If cell is dead and surrounds are exactly 3
    (arr[y][j] = 1) && (j += 1) //                cell is born / scanner starts on the next cell
  } else if (surrounds < 2) { //                                 If cel has less than 2 around it
    (arr[y][j] = 0) && (j += 1) //                cell ends itself due to loneliness / scanner starts on the next cell
  } else if ((arr[y][j] === 1) && (surrounds === (2 || 3))) { // If cell is alive and has 2/3 surroundsing friends
    (arr[y][j] = 1) && (j += 1)//                 cell lives for another day / scanner starts on the next cell
  } else if (surrounds > 3) { //                                 If cell has more than three neighbors,
    (arr[y][j] = 0) && (j += 1) //                cell ends itself, depressed by lack of space / scanner starts on the next cell
  }
}

function print () {
  for (let i = 1; i < 11; i++) {
    console.log(arr[i])
  }
  //clear()
}

function gameStart () { // Where it all begins
  scanner()
}

gameStart()

module.exports = {
  gameStart,
  countSur,
  lifeOrDeath,
  scanner
}
