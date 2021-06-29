const { mathEnforcer } = require("./app");
const { assert } = require("chai");

describe("mathEnfrorcer function tests", () => {
  describe("addFive function tests", () => {
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.addFive("test"), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.addFive([]), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.addFive({}), undefined);
    });

    //correct input
    it("if param is number add 5 to it", () => {
      assert.equal(mathEnforcer.addFive(5), 10);
    });

    it("if param is number add 5 to it", () => {
      assert.equal(mathEnforcer.addFive(3.5), 8.5);
    });

    it("if param is number add 5 to it", () => {
      assert.equal(mathEnforcer.addFive(-2), 3);
    });
  });

  describe("subtractTen function tests", () => {
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.subtractTen("test"), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.subtractTen([]), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.subtractTen({}), undefined);
    });

    it("if param is number subtract 10 to it", () => {
      assert.equal(mathEnforcer.subtractTen(20), 10);
    });

    it("if param is number subtract 10 to it", () => {
        assert.equal(mathEnforcer.subtractTen(12.5), 2.5);
      });
  
      it("if param is number subtract 10 to it", () => {
        assert.equal(mathEnforcer.subtractTen(-10),-20);
      });
  });

  describe("sum function tests", () => {
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.sum("test", 5), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.sum(5, "5"), undefined);
    });

    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.sum([]), undefined);
    });
    it("if input is not a number return undefined", () => {
      assert.equal(mathEnforcer.sum({}), undefined);
    });
    it("if two parameters are number should return their sum", () => {
      assert.equal(mathEnforcer.sum(5, 5), 10);
    });


    it("if parametars are numbers sum it", () => {
        assert.equal(mathEnforcer.sum(12.5,5.5), 18);
      });
  
      it("if param is number subtract 10 to it", () => {
        assert.equal(mathEnforcer.sum(-10,10),0);
      });
  });
});
