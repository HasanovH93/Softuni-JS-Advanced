function firstLastNumbers(arr){
   
    let firstNumber = arr.shift();
    let secondNumber = arr.pop();
    // let firstNum = Number(arr[0]);
    // let lastNum = Number(arr[arr.length - 1]);
    // console.log(firstNum+lastNum);
    console.log(Number(firstNumber) + Number(secondNumber));
}
firstLastNumbers(["10","20","30"])