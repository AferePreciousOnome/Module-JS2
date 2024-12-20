/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

//Test
const sum = require("./sum");
describe("sum function", () => {
  test("given an empty array,return should be 0", () => {
    expect(sum([])).toBe(0);
  });
  test("given an array with just one number,return should be that same number", () => {
    expect(sum([6])).toBe(6);
  });
  test("given an array containing negative number,return the correct total", () => {
    expect(sum([1, -2, 3, -4, 5])).toBe(3);
  });
  test("given an array containing non numerical number,return should ignore the non-numerical number and return the sum of the numerical number", () => {
    expect(sum([1, "hello", 2, 3, "hi"])).toBe(6);
  });
});
