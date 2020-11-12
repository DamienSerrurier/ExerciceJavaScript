let para = document.createElement('p');
let submitButton = document.getElementById('submitButton');


submitButton.onclick = function (e) {
  e.preventDefault();
  let firstNumber = document.getElementById('firstNumber').value;
  let secondNumber = document.getElementById('secondNumber').value;
  let calcul = (a, b) => a * b;
  let result = calcul(firstNumber, secondNumber)
  document.getElementById('result').appendChild(para).innerHTML = result;
}


