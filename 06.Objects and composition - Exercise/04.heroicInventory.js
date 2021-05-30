function heroInventory(arr) {

    let result = [];

    for (const element of arr) {

        let [name,level,items] = element.split(" / ");
        level = Number(level)

        if(items){
           items =  items.split(", ")
        }else {
            items = []
        }
        result.push({name,level,items});
        
        
    }
    console.log(JSON.stringify(result))
}
heroInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
