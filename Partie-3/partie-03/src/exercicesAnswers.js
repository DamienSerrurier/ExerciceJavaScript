//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  sentence = sentence.replace("e", " ");
  return sentence;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  text = firstSentence.concat(secondSentence);
  return text;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  sentence = sentence.charAt(4);
  return sentence;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  sentence = sentence.substring(9, 0);
  return sentence;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  sentence = sentence.toUpperCase();
  return sentence;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  sentence = sentence.toLowerCase();
  return sentence;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  sentence = sentence.trim();
  return sentence;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  return sentence =true;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  return fileName.slice((fileName.lastIndexOf(".")-1 >>> 0) +2);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  sentence = sentence.split(" ").length -1;
  return sentence;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  sentence = sentence.split("").reverse().join("");
  return sentence;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  if ( sentence == sentence.search("La Manu")) {
  }
  return sentence =true;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  let myArray = numbersArray.map(Math.abs,numbersArray);
  return myArray;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  myRadius = Math.round(Math.PI * Math.pow(radius, 2));
  return myRadius;
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  myHypot = Math.round(Math.hypot(a, b));
  return myHypot;
}
