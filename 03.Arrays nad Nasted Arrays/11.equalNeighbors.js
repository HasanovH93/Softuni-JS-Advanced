function equalNeighbors(arr) {
  //initialize Counter
  let counter = 0;
  //check rows
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length - 1; col++) {
      if (arr[row][col] === arr[row][col + 1]) {
        counter++;
      }
      //  console.log(arr[row][col],arr[row][col + 1]);
    }
  }

  //check columns
  let rowSize = arr[0].length;
  for (let col = 0; col < rowSize; col++) {
    for (let row = 0; row < arr.length - 1; row++) {
      if (arr[row][col] === arr[row + 1][col]) {
        counter++;
      }
      //   console.log(arr[row + 1][col],arr[row][col])
    }
  }

  //Print the result
  console.log(counter);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
