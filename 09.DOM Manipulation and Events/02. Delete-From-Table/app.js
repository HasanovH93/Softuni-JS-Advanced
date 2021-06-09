function deleteByEmail() {
  const inputValue = document.querySelector('input[name="email"]').value;

  const rows = [...document.querySelectorAll("tbody tr")];

  let isFound = false;
  for (const row of rows) {
    if (row.children[1].textContent === inputValue) {
      const parent = row.parentElement;
      parent.removeChild(row);
      isFound = true;
      break;
    }
  }


    document.getElementById("result").textContent =  isFound ? "Deleted." : "Not found.";
  
}
