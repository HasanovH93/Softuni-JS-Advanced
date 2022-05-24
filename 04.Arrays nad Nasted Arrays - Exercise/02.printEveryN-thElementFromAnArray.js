function printEveryN(arr,n) {
   
//    let filtered = arr.filter((el,i)=> {
//        if(i % 2 === 0){
//            console.log(el)
//        }
//    })
   

    let newArr = []
   for(let i = 0; i< arr.length; i++){   // i+=n
       if(i % n == 0){
           newArr.push(arr[i])
       }
   }
   return newArr

}

console.log(printEveryN(["5", "20", "31", "4", "20"], 2));
