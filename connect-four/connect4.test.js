
/**
 * @jest-environment jsdom
 */

require('./connect4');

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  console.log("--->", document.body.innerHTML)
  expect(element).not.toBeNull();
});


// test that makeBoard makes a matrix array
describe("makeBoard makes a matrix array", function () {
  test("makes matrix array", function () {
    const WIDTH = 2;
    const HEIGHT = 2;
    var board = [];
    // makeBoard()
    // console.log("makeBoard imported from connect===>" , makeBoard)
  })
})