function sameNums(input){

    let arrOfNums = String(input).split("").map(Number);
    const firstNum = arrOfNums[0];
    let result = "";
    let sum = 0;
    for (const num of arrOfNums) {
        sum += num
        if(firstNum === num){
            result = "true"
        }else {
            result = "false"
        }
    }
    console.log(result)
    console.log(sum)
    
 
}
sameNums(2222222)