"use strict";
// Define the make_shirt function with default parameters
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
// Call the make_shirt function to create shirts with different sizes and messages
make_shirt(); // Output: Shirt size: Large, Message: I love TypeScript (default values)
make_shirt("Medium"); // Output: Shirt size: Medium, Message: I love TypeScript (default message)
make_shirt("Small", "Hello, OpenAI!"); // Output: Shirt size: Small, Message: Hello, OpenAI!
