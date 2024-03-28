let personName: string = "Ayesha Sikander";

// Lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

// Uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

// Titlecase
let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
