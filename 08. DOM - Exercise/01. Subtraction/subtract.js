function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let firstAsNum = Number(firstNum.value)
    let secondNum = document.getElementById('secondNumber');
    let secondAsNum = Number(secondNum.value)
    const result = firstAsNum - secondAsNum

   let resultElement =  document.getElementById('result');

   resultElement.textContent = result
}