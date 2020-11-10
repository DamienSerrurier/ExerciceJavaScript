let firstNumber = 2;
let secondNumber = 8;

while ((firstNumber * secondNumber) < 250) {
  secondNumber++;
  let calc = firstNumber * secondNumber;
  let para = document.createElement('p');
  para.textContent = calc;
  document.body.appendChild(para);
}