let firstNumber = 9;
let secondNumber = 3;

while ((firstNumber / secondNumber) > 1) {
  firstNumber--;
  let calc = firstNumber / secondNumber;
  let para = document.createElement('p');
  para.textContent = calc;
  document.body.appendChild(para);
}