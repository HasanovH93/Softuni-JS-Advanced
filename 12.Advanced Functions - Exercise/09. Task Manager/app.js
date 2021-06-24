function solve() {
  const input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };

  const [_, openSection, progressSection, finishSection] = [
    ...document.querySelectorAll("section"),
  ].map((e) => e.children[1]);

  document.getElementById("add").addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();

    //collect field values
    //create elements
    const article = document.createElement("article");
    article.appendChild(createElement("h3", input.name.value));
    article.appendChild(
      createElement("p", `Description: ${input.description.value}`)
    );
    article.appendChild(createElement("p", `Due Date: ${input.date.value}`));
    const div = createElement("div", "", "flex");

    const startBtn = createElement("button", "Start", "green");
    const deletenBtn = createElement("button", "Delete", "red");
    const finishBtn = createElement("button", "Finish", "orange");
    div.appendChild(startBtn);
    div.appendChild(deletenBtn);
    article.appendChild(div);
    //append to Open Secion

    openSection.appendChild(article);

    Object.values(input).forEach((i) => (i.vaue = ""));

    // ** add functionaloty for start , finish ,delete task.
    startBtn.addEventListener("click", onStart);
    deletenBtn.addEventListener("click", onDelete);
    finishBtn.addEventListener("click", onFinish);
    function onDelete() {
      article.remove();
    }
    function onStart() {
      startBtn.remove();
      div.appendChild(finishBtn);
      progressSection.appendChild(article);
    }
    function onFinish() {
     div.remove()
      finishSection.appendChild(article);
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
