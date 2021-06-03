function townsToJSON(arr) {
  let result = [];

  class Town {
    constructor(name, latitude, longtitude) {
      (this.Town = name),
        (this.Latitude = Number(latitude)), /// Bad Practice
        (this.Longitude = Number(longtitude));
    }
  }

  let regexp = /\s*\|\s*/gm;
  for (let i = 1; i < arr.length; i++) {
    let newArr = arr[i].split(regexp).filter((x) => x.length != 0); //.map(t => t.trim()).filter(x =>x.length != 0);// without regex

    let [townName, latitude, longitude] = newArr;

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let town = new Town(townName, latitude, longitude);
    result.push(town);
  }
  console.log(result)
  return JSON.stringify(result);
}

console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
