function subSum(arr, sIndex, eIndex) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }

  if (sIndex < 0) {
    sIndex = 0;
  }
  if(eIndex > arr.length - 1) {
    eIndex = arr.length -1
  }
  let sum = 0;

  for (let i = sIndex; i <= eIndex; i++) {
    sum += Number(arr[i]);
  }

  return sum
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
