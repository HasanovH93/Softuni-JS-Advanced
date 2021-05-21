function lastKNumbers(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let j = arr.length - 1; j > arr.length - 1 - k; j--) {
    
      if (arr[j] !== undefined) {
        sum += arr[j];
      }
    }
    arr.push(sum);
  }
  console.log(arr);
}

lastKNumbers(6, 3);
