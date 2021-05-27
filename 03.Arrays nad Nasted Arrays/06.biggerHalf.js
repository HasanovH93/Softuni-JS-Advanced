function biggerHalf(arr) {
  let newArr = [];
  arr.sort((a, b) => a - b);

  let arrL = Math.floor(arr.length / 2);

  for (let i = arrL; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
