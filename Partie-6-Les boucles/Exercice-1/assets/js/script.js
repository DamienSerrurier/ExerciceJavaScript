const counter = document.getElementById('countYears');
let para = document.getElementById('tagP');

counter.onclick = function () {

    for (let i = 2020; i <= 2030; i++) {
        let text = "";
        //console.log('i');
        text = "L'année est " + i + '<br>'
        let colorSpan = document.createElement('span');
        para.appendChild(colorSpan).innerHTML = text;

        if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
            //console.log('i');
            colorSpan.classList.add('LeapYearColor');
        }
    }
}