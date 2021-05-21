function oddNumbers(arr) {
  let newArr = []

  for(let i=0;i<arr.length;i++){
      if(i % 2 === 1){
         newArr.push(arr[i] * 2)
      }
  }
  console.log(newArr.reverse())

//   const solve = arr
//     .filter((_, i) => i % 2)
//     .map((x = x * 2))
//     .reverse()
//     .join(" ");
//   console.log(solve);
}

oddNumbers([10, 15, 20, 25]);
