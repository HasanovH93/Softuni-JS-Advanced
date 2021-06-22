function solve() {
  const input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };

  const [_, openSection, progressSection, finishSection] = [
    ...document.querySelectorAll("section"),
  ];

  document.getElementById("add").addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();

    //collect field values
    //create elements
    const article = document.createElement("article");
    article.appendChild(createElement("h3", input.name.value));
    article.appendChild(
      createElement("p", `Desciption: ${input.description.value}`)
    );
    article.appendChild(createElement("p", `Due date: ${input.date.value}`));
    const div = createElement("div", "", "flex");
    div.appendChild(createElement("button", "Start", "green"));
    div.appendChild(createElement("button", "Delete", "red"));
    article.appendChild(div);
    //append to Open Secion

    openSection.appendChild(article);

    Object.values(input).forEach((i) => (i.vaue = ""));

    // ** add functionaloty for start , finish ,delete task.
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
