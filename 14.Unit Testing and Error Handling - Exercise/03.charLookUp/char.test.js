const { lookupChar } = require("./char");
const { assert } = require("chai");

describe("look for a char in string TEST", () => {
  //valid tests
  it("return char at index", () => {
    assert.equal(lookupChar("Hello", 3), "l");
  });

  //invalid tests
  it("return undefined if first param is not a string", () => {
    assert.equal(lookupChar(555, 5), undefined);
  });

  it("return undefined if second param is not a integer", () => {
    assert.equal(lookupChar("string", "5"), undefined);
  });
  it("return undefined if second param is not a integer", () => {
    assert.equal(lookupChar("string", 5.5), undefined);
  });

  it("return incorrect index over string length", () => {
    assert.equal(lookupChar("string", 10), "Incorrect index");
  });

  it("return incorrect index under string length", () => {
    assert.equal(lookupChar("string", -1), "Incorrect index");
  });
});
