function pieceOfPie(arr,firstPie,lastPie) {
   
    const firstIndex = arr.indexOf(firstPie);
    const lastIndex = arr.indexOf(lastPie);
    
    let newArr = arr.slice(firstIndex, lastIndex+1);
    return newArr
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
