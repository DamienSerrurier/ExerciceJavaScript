let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let tableRow = document.getElementById('tableRow');

languages.forEach(function(element) {
    let tableTd = document.createElement('td');
    tableTd.innerHTML = element;
    tableRow.appendChild(tableTd);
});