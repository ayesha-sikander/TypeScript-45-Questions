// Define the describe_city function with a default parameter for country
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function with different cities and countries
describe_city("Karachi"); // Output: Karachi is in Pakistan (default country)
describe_city("Sarghoda", "Punjab"); // Output: New York is in Punjab
describe_city("Murree", "Islamabad"); // Output: Murree is in Islamabad
