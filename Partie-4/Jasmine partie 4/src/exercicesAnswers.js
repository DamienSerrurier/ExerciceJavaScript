//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
  let arrayDay = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  return arrayDay;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (array) {
  return array[2];
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (array) {
  return array[array.length -4];
}

// Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (array) {
  let = reponse = array.splice(1, 1, 'php');
  return array;
} 

/*//Alternative Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (array) {
  array[1] = 'php';
  return array;
}*/

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (array) {
  array.push('ruby', 'python');
  return array;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (array) {
  array.unshift('html', 'css');
  return array;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (array) {
  array.shift();
  return array;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (array) {
  array.pop();
  return array;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
  let array = new Array;
  array['name'] = 'Jean';
  array['age'] = 45;
  array['city'] = 'Paris';
  return array;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (array) {
  return array['name'];
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (array) {
  nameIndex = array['name'];
  ageIndex = array['age'];
  cityIndex = array['city'];
  sentence = "Bonjour, je suis " + [nameIndex] + ". J'ai " + [ageIndex] +  " ans et j'habite " + [cityIndex] + ".";
  return sentence;
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  return string.split(",");
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  return array.sort();
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  return array.toString();
}

/*//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
  let returnString = function (array) {
    return array.localString;
  }
  */