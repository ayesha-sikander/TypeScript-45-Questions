// Define a function called createCar that stores information about a car in an object
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any }[] } {
    const car: { manufacturer: string, model: string, options: { [key: string]: any }[] } = {
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
