// Version where the if block runs
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

// Version where the else block runs
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}
