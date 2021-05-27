function oddNumbers(arr){
   
    let newArr = []

    for(let i=0;i<arr.length;i++){
        if(i % 2 === 1){
           newArr.push(arr[i] * 2)
        }
    }
    console.log(newArr.reverse())
        
}

oddNumbers([10, 15, 20, 25])