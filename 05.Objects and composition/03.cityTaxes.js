function cityTaxes(name, population, treasury) {
  let cityRecord = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate)
    },
    applyGrowth(percent) {
        this.population += Math.floor(this.population * percent / 100)
    },
    applyRecession(percen) {
        this.treasury -= Math.floor(this.treasury * percen / 100)
    },
  };
  return cityRecord;
}

// const city = cityTaxes("Tortuga", 7000, 15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);


cityTaxes();
