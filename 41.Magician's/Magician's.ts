// Define a function called show_magicians that prints the names of magicians in the array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller", "Dynamo"];

// Call show_magicians function to print the names of magicians
show_magicians(magicians);
