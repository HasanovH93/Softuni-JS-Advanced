function townPopulation(arr) {
  const result = {};

  for (const element of arr) {
    const [cityName, populationAsString] = element.split("<->");
    let population = Number(populationAsString)
   
    if (!result[cityName]) {
      result[cityName] = 0;
    } 
      result[cityName] += population;
   
  }
  for (let town in result) {
    console.log(`${town}: ${result[town]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
