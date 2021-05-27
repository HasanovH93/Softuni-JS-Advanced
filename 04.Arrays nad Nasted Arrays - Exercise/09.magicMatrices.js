function magicMatrices(arr) {
  //   let magicalN = 0;
  //   for (let i = 0; i < arr[0].length; i++) {
  //     magicalN += arr[0][i];
  //   }

  //   for (let r = 0; r < arr.length; r++) {
  //     let sumOfR = 0;
  //     let sumOfC = 0;
  //     for (let c = 0; c < arr.length; c++) {
  //       sumOfR += arr[r][c];
  //       sumOfC += arr[c][r];
  //     }
  //     if (magicalN !== sumOfC || magicalN !== sumOfR) {
  //       return false;
  //     }
  //   }
  //   return true;
  
  let sum = arr[0].reduce((a, b) => a + b);
  let firstAr = arr[0].reduce((a, b) => a + b);
  let secondArr = arr[1].reduce((a, b) => a + b);
  let thhirdArr = arr[2].reduce((a, b) => a + b);

  if(firstAr == sum && secondArr == sum && thhirdArr == sum){
      return true;
  }else  {
      return false;
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
