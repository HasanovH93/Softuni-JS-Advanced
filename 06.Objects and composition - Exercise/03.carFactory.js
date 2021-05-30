function carFactory(obj) {
  const result = {};

  let engine = {};
  let carriage = {};

  result.model = obj.model;
  if (obj.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (obj.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else if (obj.power <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }

  carriage.type = obj.carriage;
  carriage.color = obj.color;

  if (obj.wheelsize % 2 === 0) {
    obj.wheelsize--;
  }

  result.engine = engine;
  result.carriage = carriage;
  result.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

  return result;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
