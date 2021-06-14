function solve(areaIn, volIn, input) {
  const data = JSON.parse(input);
  const resultArr = [];

  for (let cube of data) {
    const curr = {
      area: areaIn.call(cube),
      volume: volIn.call(cube),
    };
    resultArr.push(curr);
  }
  return resultArr;
}
solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
function area() {
  return Math.abs(this.x * this.y);
}
