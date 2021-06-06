function biggestElement(el){
    let biggest = el[0][0];
    
    for (let r = 0; r < el.length; r++){
        console.log(el[r])
        for(let c = 0; c <= el.length; c++){
            console.log(el[c])
            if (biggest < el[r][c]){
                biggest = el[r][c];

            }
            
        }
    }
        
    return biggest
    }
       

console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
