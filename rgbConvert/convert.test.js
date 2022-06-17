const { rgbToHexColor } = require("./convert");
const { expect } = require("chai");

describe("RGBtoHexColor", () => {
  it("converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("converts to #234465", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
  });

  it("returns undefined for missing params", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("returns undefined for out of lower bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });
  it("returns undefined for out of upperbound", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it("returns undefined for floats", () => {
    expect(rgbToHexColor(1.5, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.5, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.5)).to.be.undefined;
  });

  it("returns undefined for strings", () => {
    expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
  });
});
