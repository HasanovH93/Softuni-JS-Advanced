function solve(arr) {
    let isMagical = true;
    for(let i = 0 ; i < arr.length -1 ; i++){
        let firstRowSum = arr[i].reduce((a,b)=> a + b, 0 );
        let secondRowSum = arr[i + 1].reduce((a,b)=> a + b, 0 );

        let sumColOne = 0;
        let sumColTwo = 0;

        for(let j = 0; j < arr.length; j++){
            sumColOne += arr[i][j];
            sumColTwo += arr[i+1][j]
        }
        if(firstRowSum !== secondRowSum || sumColOne !== sumColTwo){
            isMagical = false
        }
    }
    return isMagical
}
console.log(solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
