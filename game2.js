module.exports = {
  gameStart
}

let clear = require('clear')
clear()

let board = [ //      Daddy arr
  [ {row: 1, col: 1, isAlive: false, surrounds: 0},
    {row: 1, col: 2, isAlive: false, surrounds: 0},
    {row: 1, col: 3, isAlive: false, surrounds: 0},
    {row: 1, col: 4, isAlive: false, surrounds: 0}
  ],
  [ {row: 2, col: 1, isAlive: false, surrounds: 0},
    {row: 2, col: 2, isAlive: false, surrounds: 0},
    {row: 2, col: 3, isAlive: true, surrounds: 0},
    {row: 2, col: 4, isAlive: false, surrounds: 0}
  ],
  [ {row: 3, col: 1, isAlive: false, surrounds: 0},
    {row: 3, col: 2, isAlive: false, surrounds: 0},
    {row: 3, col: 3, isAlive: true, surrounds: 0},
    {row: 3, col: 4, isAlive: false, surrounds: 0}
  ],
  [ {row: 4, col: 1, isAlive: true, surrounds: 0},
    {row: 4, col: 2, isAlive: false, surrounds: 0},
    {row: 4, col: 3, isAlive: false, surrounds: 0},
    {row: 4, col: 4, isAlive: false, surrounds: 0}
  ]]

// Where it all begins
function gameStart () {
  arr1()
}

// Live cell fewer than two live neighbors dies
// Live cell with two or three live neighbors lives
// Live cell with more than three live neighbors dies
// Dead cell with three live neighbors becomes a live cell
// checks first arr for alive cells
function arr0 (board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = board[i][j]
      checkSurrounds(cell, board)
    } else { (cell.isAlive)
      arr1()
    }
  }
}

// Function that is called when a live cell is found and finds condition of surrounds cells
function checkSurrounds (cell, board) {
  
}

function where (cell, board){
  let newArr = []
  const searchKeys = Object.keys(cell)
  for (let i = 0; i < arr.length; i++){
    let matched = false
    const arrItem = arr[i]
    for (let j = 0; j < searchKeys.length; j++){
      const searchKey = searchKeys[j]
      const searchValue = cell[searchKey]
      const itemValue = arrItem[searchKey]
      //console.log(arr[i][searchKeys[j]], searchDetails[searchKeys[j]])
      if (itemValue === searchValue) {
        //console.log("matched")
        matched = true
      }
      else {
        //console.log ("did not match")
        matched = false
        break
      }
    }
    if (matched){
      newArr.push(arrItem)
    }
  }
  return newArr
}
