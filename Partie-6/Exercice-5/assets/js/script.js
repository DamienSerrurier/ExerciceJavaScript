let firstNumber = 2;
let secondNumber = 8;

while ((firstNumber * secondNumber) < 250) {
    let calc = firstNumber * secondNumber;
    secondNumber++;
    let para = document.createElement('p');
    para.textContent = calc;
    document.body.appendChild(para);
  }
