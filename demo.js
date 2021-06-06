function solve(arr) {

    let newArr = []
    let sorted = arr.sort((a,b) => a-b)
    
    while(sorted.length !== 0){
        let firstElement = sorted.shift();
        let lastElement = sorted.pop();
   
        newArr.push(firstElement)
        newArr.push(lastElement)
      
    }
     
   
  console.log(arr)
  console.log(newArr)
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
