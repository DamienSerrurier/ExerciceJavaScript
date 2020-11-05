let submitButton = document.getElementById('submitButton');
submitButton = function changeColor(e) {
    e.preventDefault();
    let password = document.getElementById('pass');
    let confirmPassword = document.getElementById('confirmPass');

    if (password.value == confirmPassword.value) {
        password.className = "colorGreen";
        confirmPassword.className = "colorGreen";
    } else {
        password.className = "colorRed";
        confirmPassword.className = "colorRed";
    }
}
