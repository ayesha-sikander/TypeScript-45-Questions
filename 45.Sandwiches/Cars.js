"use strict";
// Define a function called createCar that stores information about a car in an object
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    return car;
}
// Call the createCar function with required information and additional options
const carInfo = createCar("Toyota", "Camry", { color: "Red" }, { features: ["Navigation", "Sunroof"] });
// Print the object returned by createCar to ensure all information was stored correctly
console.log(carInfo);
