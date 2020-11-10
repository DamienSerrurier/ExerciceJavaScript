const buttonClone = document.getElementById('buttonClone');

buttonClone.onclick = function buttonCloneField() {
	let name = document.getElementsByTagName('DIV')[0];
	let cloneName = name.cloneNode(true);
	document.body.appendChild(cloneName);
	let age = document.getElementsByTagName('DIV')[1];
	let cloneAge = age.cloneNode(true);
	document.body.appendChild(cloneAge);
}


/*const cloned = document.getElementById('cloned');

cloned.addEventListener('click' , clonedInput)

function clonedInput(e) {
    e.preventDefault();
    let name = document.getElementById("form").cloneNode(true);
    document.getElementById('formName').appendChild(name);
}*/