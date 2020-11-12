let resultDiv = document.getElementById('resultDiv');
let firstNumber = 2;
let secondNumber = 3;
let result = 0;


while ((firstNumber * secondNumber) < 250) {
  result = firstNumber * secondNumber;
  secondNumber = result ;
  
  resultDiv.innerHTML += '<p>' + result + '</p>';
}