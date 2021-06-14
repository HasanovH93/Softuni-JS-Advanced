function addItem() {
    

    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    let dropDownMenu = document.getElementById('menu');
    if(newText !== '' && newValue !== '') {
        dropDownMenu.appendChild(option);
    }
   
    

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}