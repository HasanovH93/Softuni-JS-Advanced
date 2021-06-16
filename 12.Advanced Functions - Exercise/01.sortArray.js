function sortArr(arr, type) {
  const methods = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };
  arr.sort(methods[type]);
  return arr;
}

sortArr([14, 7, 17, 6, 8], "asc");
sortArr([14, 7, 17, 6, 8], "desc");
