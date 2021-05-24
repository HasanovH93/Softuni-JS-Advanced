function lastKNumbers(num1,num2){
  
    let arr = [1,1];
    for(let i = 1; i<= num1; i++){
     
    let result = arr.slice(-num2)
    for (const element of result) {
        element+=element
        console.log(result);
    }

    }
}

lastKNumbers(6,3)