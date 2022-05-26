function townPopulation(arr) {
  const result = {};

  for (const element of arr) {
    const tokens = element.split("<->");
    const cityName = tokens[0];
    let population = Number(tokens[1]);
    if (result[cityName] == undefined) {
      result[cityName] = population;
    } else {
      result[cityName] += population;
    }
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
