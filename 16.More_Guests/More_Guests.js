"use strict";
let More_Guest_List = ['Ayesha', 'Anaya', 'Habiba'];
//for(let i=0; i<Changing_Guest_List.length; i++){
//console.log(`Dear Ms. ` + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
let absent_Guest = "Ayesha";
let new_Guest = "Tuba";
More_Guest_List[0] = new_Guest;
for (let i = 0; i < More_Guest_List.length; i++) {
    console.log(`Dear, Ms. ` + More_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Ms. ${absent_Guest} is not coming to the party`);
console.log('Good News! We find Big Table so we are 3 more guests.');
//Addition OF New Guests
More_Guest_List.unshift('Miss Bisma');
//We are inviting guest index 2 ii
More_Guest_List.splice(2, 0, 'Sana');
//we are inviting last guest
More_Guest_List.push('Sara');
for (let i = 0; i < More_Guest_List.length; i++) {
    console.log(`Dear, Ms. ` + More_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
