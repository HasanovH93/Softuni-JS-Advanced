const { isOddOrEven } = require("./evenOrOdd");
const { assert } = require("chai");

describe("isOddOrEven function test", () => {
  //invalid input tests
  it("should return undefined if param is number", () => {
    assert.equal(isOddOrEven(5), undefined);
  });

  it("should return undefined if param is object", () => {
    assert.equal(isOddOrEven({}), undefined);
  });
  it("should return undefined if param is array", () => {
    assert.equal(isOddOrEven([]), undefined);
  });

  //valid input tests

  it("should return even as result", () => {
    assert.equal(isOddOrEven("aaaa"), "even");
  });

  it("should return odd as result", () => {
    assert.equal(isOddOrEven("aaa"), "odd");
  });
});
