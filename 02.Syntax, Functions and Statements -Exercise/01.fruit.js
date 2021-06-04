function fruit(type,quantity,price) {

    quantity = quantity / 1000;
    let totalPrice = quantity * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${quantity.toFixed(2)} kilograms ${type}.`);
}
fruit('apple', 1563, 2.35)