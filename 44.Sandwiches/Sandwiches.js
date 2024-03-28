"use strict";
// Define a function called orderSandwich that prints a summary of the sandwich being ordered
function orderSandwich(...items) {
    console.log("Sandwich ordered with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}
// Call the orderSandwich function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss", "Pickles");
orderSandwich("Peanut Butter", "Jelly");
