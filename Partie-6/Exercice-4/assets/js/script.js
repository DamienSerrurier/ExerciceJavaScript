let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let tableRow = document.getElementById('tableRow');

days.forEach(function (element) {
    let tableTd = document.createElement('td');
    tableTd.innerHTML = element;
    if ((element == 'Samedi') || (element == 'Dimanche')) {
        //console.log(element);
        tableTd.style.fontWeight = 'bold';
    }
    tableRow.appendChild(tableTd);
});