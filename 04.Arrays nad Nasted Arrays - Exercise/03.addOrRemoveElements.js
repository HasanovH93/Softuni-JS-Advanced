function addAndRemove(commands) {
  let newArr = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "add") {
      newArr.push(i + 1);
    } else if (commands[i] === "remove") {
      newArr.pop();
    }
  }
  if (newArr.length == 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join("\n"));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
