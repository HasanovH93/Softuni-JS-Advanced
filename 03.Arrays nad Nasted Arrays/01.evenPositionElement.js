function evenPosition(arr){

    let arrL = arr.length;
    let newArr = []

    for(let i=0;  i <arrL; i+=2){
       newArr.push(arr[i])
    }
    console.log(...newArr)

}
evenPosition(['20', '30', '40', '50', '60'])