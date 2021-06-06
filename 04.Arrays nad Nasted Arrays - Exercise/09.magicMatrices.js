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

console.log(magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));



// function solve(arr) {
//   let isMagical = true;
//   for(let i = 0 ; i < arr.length -1 ; i++){
//       let firstRowSum = arr[i].reduce((a,b)=> a + b, 0 );
//       let secondRowSum = arr[i + 1].reduce((a,b)=> a + b, 0 );

//       let sumColOne = 0;
//       let sumColTwo = 0;

//       for(let j = 0; j < arr.length; j++){
//           sumColOne += arr[i][j];
//           sumColTwo += arr[i+1][j]
//       }
//       if(firstRowSum !== secondRowSum || sumColOne !== sumColTwo){
//           isMagical = false
//       }
//   }
//   return isMagical
// }
// console.log(solve([
// [4, 5, 6],
// [6, 5, 4],
// [5, 5, 5],
// ]));
