"use strict";
let current_users = ["ayesha", "anaya", "habiba", "sarah", "sana"];
let new_users = ["ayesha", "anaya", "habiba", "sarah", "sana"];
for (let new_username of new_users) {
    // Convert both usernames to lowercase for case-insensitive comparison
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === new_username.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
        current_users.push(new_username); // Add the new username to the current_users list
    }
}
