// Define a function called show_magicians that prints the names of magicians in the array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function called make_great that modifies the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller", "Dynamo"];

// Call make_great function to modify the array of magicians
make_great(magicians);

// Call show_magicians function to print the modified list of magicians
show_magicians(magicians);
