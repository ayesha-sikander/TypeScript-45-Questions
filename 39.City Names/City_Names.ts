// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with different city-country pairs
const location1: string = city_country("Lahore", "Pakistan");
console.log(location1); // Output: Lahore, Pakistan

const location2: string = city_country("Makkah", "Saudi Arabia");
console.log(location2); // Output: Makkah, Saudi Arabia

const location3: string = city_country("Gaza", "Palestine");
console.log(location3); // Output: Gaza, Palestine
