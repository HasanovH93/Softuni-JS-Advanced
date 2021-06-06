function solve(str) {
  let arr = ["a", "o", "e", "i", "u"];
  let secondArr = str.trim().split("")
  let vowelsCount = 0;

  for (const element of arr) {
      for(let i = 0; i<= secondArr.length -1; i++){
          if(element === secondArr[i]){
            vowelsCount++
          }
      }
      }
 
  
  return vowelsCount
}
console.log(solve("pear tree"));
