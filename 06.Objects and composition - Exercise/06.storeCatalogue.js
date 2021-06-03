//Solution 1

// function store(arr) {
//   let filtered = arr.sort((a, b) => a.localeCompare(b));
//   let current = [];
//   let char = "";
//   for (let i = 0; i < filtered.length; i++) {
//     current = filtered[i].split(" : ");
//     if (filtered[i][0] != char) {
//       console.log(filtered[i][0]);
//       char = filtered[i][0];
//     }
//     console.log(`  ${current[0]}: ${current[1]}`);
//   }
// }
// store([
//   "Appricot : 20.4",
//   "Fridge : 1500",
//   "TV : 1499",
//   "Deodorant : 10",
//   "Boiler : 300",
//   "Apple : 1.25",
//   "Anti-Bug Spray : 15",
//   "T-Shirt : 10",
// ]);

//Solution 2

function solve(arr) {
  let obj = {};

  for (const line of arr) {
    let [product, price] = line.split(" : ");
    price = Number(price);
    let letter = product[0];

    if (!obj[letter]) {
      obj[letter] = {};
    }
    obj[letter][product] = price;
  }

  let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  for (const letter of sortedLetters) {
    console.log(letter);
    let sortedProducts = Object.keys(obj[letter]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProducts) {
      console.log(`  ${product}: ${obj[letter][product]}`);
    }
  }
  console.log(obj);
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
