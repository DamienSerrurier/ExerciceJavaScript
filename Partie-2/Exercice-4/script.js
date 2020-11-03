let note = Number (prompt("Indiquez une note", ""));

if (note == 0 || note <= 3)  {
    alert("Nul");
} else if (note == 4 || note <= 6) {
    alert("Moyen");
} else if (note == 6 || note < 8) {
    alert("Assez Bien");
} else if ( note <= 9) {
    alert("Bien");
} else if (note == 10) {
    alert("Excellent");
} else {
    alert("Ceci n'est pas un nombre")
}

/*if (Number.isNaN(note)) {
    alert("Ceci n'est pas un nombre")
}
*/