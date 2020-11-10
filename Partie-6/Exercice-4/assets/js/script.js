let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let tableRow = document.getElementById('tableRow');

days.forEach(function (element) {
    let tableTd = document.createElement('td');

    if ((element == 'Samedi') || (element == 'Dimanche')) {
        //console.log(element);
        tableTd.innerHTML = element.bold();
    } else {
        tableTd.innerHTML = element;
    }

    tableRow.appendChild(tableTd);
});