function argInfo() {
  const params = [...arguments];

  const types = {};

  for (let arg of params) {
    const type = typeof arg;
    console.log(`${type}: ${arg}`);

    if (types[type] === undefined) {
      types[type] = 0;
    }
    types[type]++;
  }
  let result = Object.entries(types).sort((a, b) => {
    return b[1] - a[1];
  });

  for (let [type, count] of result) {
    console.log(`${type} = ${count}`);
  }
}
argInfo("cat", 42, function () {
  console.log("Hello world!");
});
