let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let mail = document.getElementById('mail');

firstName.onfocus = function () {
	firstName.classList.add('borderBlack');
}

lastName.onfocus = function () {
	lastName.classList.add('borderBlack');
}

mail.onfocus = function () {
	mail.classList.add('borderBlack');
}

firstName.onblur = function () {
	firstName.classList.remove('borderBlack');
}

lastName.onblur = function () {
	lastName.classList.remove('borderBlack');
}

mail.onblur = function () {
	mail.classList.remove('borderBlack');
}