function sorting(arr) {
  arr.sort(twoCriteriaSort);
  return arr.join("\n");
  function twoCriteriaSort(curr, next) {
    if (curr.length === next.length) {
      return curr.localeCompare(next);
    }
    return curr.length - next.length;
  }
}

console.log(sorting(["alpha", "beta", "gamma"]));
