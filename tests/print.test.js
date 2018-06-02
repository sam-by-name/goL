const game = require('../game.js')

test('test live cell with less than two live neighbors', function () {
  // const frame = [0, 0]
  const expected = 1
  const actual = game.print()
  expect(actual).toBe(expected)
})
