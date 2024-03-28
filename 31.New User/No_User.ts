let users: string[] = []; // Empty array

// Check if the list of users is not empty
if (users.length > 0) {
    // If the list is not empty, iterate through the array and print each username
    console.log("Here are the current users:");
    users.forEach(user => {
        console.log(user);
    });
} else {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}

// Remove all usernames from the array
users = [];

// Check if the list of users is not empty after removal
if (users.length > 0) {
    console.log("Here are the current users:");
    users.forEach(user => {
        console.log(user);
    });
} else {
    // Print the message when the list is empty
    console.log("We need to find some users!");
}
