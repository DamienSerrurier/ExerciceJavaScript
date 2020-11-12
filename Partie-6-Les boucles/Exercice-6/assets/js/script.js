let resultDiv = document.getElementById('resultDiv');
let firstNumber = 9;
let secondNumber = 7;
let result = 0;


while ((firstNumber / secondNumber) > 1) {
  result = firstNumber / secondNumber;
  firstNumber = result ;
  
  resultDiv.innerHTML += '<p>' + result + '</p>';
}