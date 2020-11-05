let password = document.getElementById('pass');
let passwordConfirm = document.getElementById('confirmPass');
let buttonSubmit = document.getElementById('submitButton');

buttonSubmit.onclick = function(e) {
    e.preventDefault;
    if (password.value === passwordConfirm.value) {
        password.classList.toggle('colorGreen');
        passwordConfirm.classList.toggle('colorGreen');
    } else {
        password.classList.toggle('colorRed');
        passwordConfirm.classList.toggle('colorRed');
    }
}
