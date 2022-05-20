function aggregateEl(input) {
  let result = 0;
  let resultAsString = "";
  let inverseElements = 0;
  for (const el of input) {
    result += el;
    resultAsString += el;
    inverseElements += 1 / el;
  }
  console.log(result);
  console.log(inverseElements);
  console.log(resultAsString);
}
aggregateEl([1, 2, 3]);
