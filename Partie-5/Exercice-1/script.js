/*function verifPassword() {
    let password = document.getElementById('pass');
    let confirmPassword = document.getElementById('confirmPass');

    if (password.value == confirmPassword.value) {
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    } else {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }

}*/

let submitButton = document.getElementById('submitButton');
submitButton.onclick = function (e) {
    e.preventDefault();
    let password = document.getElementById('pass');
    let confirmPassword = document.getElementById('confirmPass');

    if (password.value == confirmPassword.value) {
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    } else {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }
}