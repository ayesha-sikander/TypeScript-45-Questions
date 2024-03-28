"use strict";
let personName = "Ayesha Sikander";
// Lowercase
let lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Uppercase
let uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Titlecase
let titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
