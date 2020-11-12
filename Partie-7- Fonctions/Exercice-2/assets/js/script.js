let buttonBold = document.getElementById('buttonBold');
let buttonColor = document.getElementById('buttonColor');
let buttonSize = document.getElementById('buttonSize');
let textBold = document.querySelector('div');

buttonBold.onclick = function () {
    textBold.classList.toggle('textBold');
}

buttonColor.onclick = function () {
    textBold.classList.toggle('redTextColor');
}

buttonSize.onclick = function () {
    textBold.classList.toggle('textSize');
}