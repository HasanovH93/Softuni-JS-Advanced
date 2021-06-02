
//Solution 1
// function carFactory(obj) {
//   const result = {};

//   let engine = {};
//   let carriage = {};

//   result.model = obj.model;
//   if (obj.power <= 90) {
//     engine.power = 90;
//     engine.volume = 1800;
//   } else if (obj.power <= 120) {
//     engine.power = 120;
//     engine.volume = 2400;
//   } else if (obj.power <= 200) {
//     engine.power = 200;
//     engine.volume = 3500;
//   }

//   carriage.type = obj.carriage;
//   carriage.color = obj.color;

//   if (obj.wheelsize % 2 === 0) {
//     obj.wheelsize--;
//   }

//   result.engine = engine;
//   result.carriage = carriage;
//   result.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

//   return result;
// }
// carFactory({
//   model: "VW Golf II",
//   power: 90,
//   color: "blue",
//   carriage: "hatchback",
//   wheelsize: 14,
// });

// solution 2

function solve(obj) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [
    { type: "hatchback", color: obj.color },
    { type: "coupe", color: obj.color },
  ];
  let wheelSize = obj.wheelSize % 2 == 1 ? obj.wheelSize : obj.wheelSize - 1;

  return {
    model: obj.model,
    engine: engines.filter(e => e.power >= obj.power)[0],
    carriages : carriages.filter(c => c.type == obj.carriage)[0],
    wheels: [wheelSize,wheelSize,wheelSize,wheelSize]
  };
}
console.log(solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
}));
