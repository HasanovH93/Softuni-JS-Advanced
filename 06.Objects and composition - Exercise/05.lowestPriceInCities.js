//Solution 1
// function lowestPrice(arr) {
//   let products = [];

//   while (arr.length > 0) {
//     let [town, product, price] = arr.shift().split(" | ");
//     price = Number(price);

//     if (products.filter((x) => x.product === product).length > 0) {
//       let obj = products.find((x) => x.product === product);
//       if (obj.price > price) {
//         obj.price = price;
//         obj.town = town;
//       }
//     } else {
//       let obj = { product, town, price };
//       products.push(obj);
//     }
//   }
//   for (const product of products) {
//     console.log(`${product.product} -> ${product.price} (${product.town})`);
//   }
// }
// lowestPrice([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);

//Solution 2

function solve(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i];
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (!obj[product]) {
      obj[product] = { town, price };
    } else {
      if (price < obj[product].price) {
        obj[product] = { town, price };
      }
    }
  }
  let productNames = Object.keys(obj);
  for (const product of productNames) {
    console.log(`${product} -> ${obj[product].price} (${obj[product].town})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
