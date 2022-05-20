function prevDay(year,month,day){
 
   let date = new Date(year,month,day - 1 );
   console.log(date)
}
prevDay(2016, 9, 1)