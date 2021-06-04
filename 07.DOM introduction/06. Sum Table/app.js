function sumTable(){

    //select all data rows(exlude first and last row)
    const rows = [...document.querySelectorAll('tr')].slice(1,-1)
    let sum = 0;
    //for each row :
    for(let row of rows){
          //-- select last column
     const value =  Number(row.lastElementChild.textContent)
      //-- add content to sum
     sum+= value
    }
   document.getElementById('sum').textContent = sum
    // display sum in Sum

}