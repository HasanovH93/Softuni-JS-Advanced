function store(arr) {
  let filtered = arr.sort((a,b) => a.localeCompare(b));
  let current = [];
  let char = '';
  for(let i = 0; i< filtered.length; i++){
      current = filtered[i].split(" : ");
     if(filtered[i][0] != char){
         console.log(filtered[i][0])
         char = filtered[i][0]
     }
     console.log(`  ${current[0]}: ${current[1]}`)


  }
}
store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
