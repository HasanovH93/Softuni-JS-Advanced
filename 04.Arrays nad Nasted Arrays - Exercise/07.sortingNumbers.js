function sortingNumbers(arr){


   let resultArr = [];
   let sorted = arr.sort((a,b)=> a-b);
   while(sorted.length !== 0) {
       let firstElement = sorted.shift();
       let lastElement   = sorted.pop();

       resultArr.push(firstElement);
       resultArr.push(lastElement)
   }
   return resultArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])