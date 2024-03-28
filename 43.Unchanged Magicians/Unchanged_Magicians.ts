// Define a function called show_magicians that prints the names of magicians in the array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function called make_great that modifies a copy of the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

// Original array of magician's names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller", "Dynamo"];

// Call make_great function with a copy of the array of magicians' names and store the modified array in a new array
const greatMagicians: string[] = make_great([...magicians]);

// Call show_magicians function with each array to show the original names and the names with "the Great" added
console.log("Original Magicians:");
show_magicians(magicians);

console.log("Great Magicians:");
show_magicians(greatMagicians);
