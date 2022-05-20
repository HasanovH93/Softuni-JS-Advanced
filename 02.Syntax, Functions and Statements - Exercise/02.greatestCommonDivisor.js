function gcd(a,b){
  let firstNum = Number(a);
  let secNum = Number(b);

  while(firstNum !== secNum){
      if(firstNum > secNum){
          firstNum -= secNum;
      }else {
           secNum -= firstNum;
      }
  }
  console.log(firstNum)
}
gcd(2154, 458)