function cookingByNum(num, p1, p2, p3, p4, p5) {
  let inputAsNum = Number(num);
  let arrOfCommands = [p1, p2, p3, p4, p5];

  let chop = function () {
    return inputAsNum / 2;
  };
  let dice = function () {
    return Math.sqrt(inputAsNum);
  };
  let spice = function () {
    return inputAsNum + 1;
  };
  let bake = function () {
    return inputAsNum * 3;
  };

  let fillet = function () {
    return inputAsNum * 0.8;
  };

  for (const command of arrOfCommands) {
    switch (command) {
      case "chop":
        inputAsNum = chop(inputAsNum);
        console.log(inputAsNum);
        break;
      case "dice":
        inputAsNum = dice(inputAsNum);
        console.log(inputAsNum);
        break;
      case "spice":
        inputAsNum = spice(inputAsNum);
        console.log(inputAsNum);
        break;
      case "bake":
        inputAsNum = bake(inputAsNum);
        console.log(parseFloat(inputAsNum));
        break;
      case "fillet":
        inputAsNum = fillet(inputAsNum);
        console.log(inputAsNum);
        break;
    }
  }
}
cookingByNum("9", "dice", "spice", "chop", "bake", "fillet");
