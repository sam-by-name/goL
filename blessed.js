const blessed = require('blessed')

// Create a screen object.
let screen = blessed.screen({
  smartCSR: true
})

screen.title = 'my window title'

// Create a box perfectly centered horizontally and vertically.
function box (a) {
  let box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: a,
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0'
      },
      hover: {
        bg: 'green'
      }
    }
  })

  screen.append(box)
}
module.exports = box
