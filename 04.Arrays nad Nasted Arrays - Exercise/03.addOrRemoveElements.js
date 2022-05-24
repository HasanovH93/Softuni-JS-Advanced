function addAndRemove(commands) {
  let newArr = [1];

  for (const el of newArr) {
    for (const command of commands) {
      if (command === "add") {
        newArr.push(el + 1);
      }
    }
  }
  console.log(newArr);
}
addAndRemove(["add", "add", "add", "add"]);
