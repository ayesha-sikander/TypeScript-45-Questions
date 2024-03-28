"use strict";
// Define the city_country function
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the city_country function with different city-country pairs
const location1 = city_country("Lahore", "Pakistan");
console.log(location1); // Output: Lahore, Pakistan
const location2 = city_country("Makkah", "Saudi Arabia");
console.log(location2); // Output: Makkah, Saudi Arabia
const location3 = city_country("Gaza", "Palestine");
console.log(location3); // Output: Gaza, Palestine
