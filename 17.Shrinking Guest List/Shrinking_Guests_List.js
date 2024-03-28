"use strict";
let Guest_List = ['Ayesha', 'Anaya', 'Habiba'];
//for(let i=0; i<Changing_Guest_List.length; i++){
//console.log(`Dear Ms. ` + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
let absent_Guest = "Ayesha";
let new_Guest = "Tuba";
Guest_List[0] = new_Guest;
//for(let i=0; i<More_Guest_List.length; i++){
//console.log(`Dear, Ms. ` + More_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
//console.log(`Ms. ${absent_Guest} is not coming to the party`);
console.log('Good News! We find Big Table so we are 3 more guests.');
//Addition OF New Guests
Guest_List.unshift('Miss Bisma');
//We are inviting guest index 2 ii
Guest_List.splice(2, 0, 'Sana');
//we are inviting last guest
Guest_List.push('Sara');
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear, Ms. ` + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
//Shrinking Guest List
console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');
//While loop
while (Guest_List.length > 2) {
    //Guests ko nikalny k lye hm pop ka use krty hen
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Ms. ${remove_Guest}, You are not invited for the dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear, Ms. ` + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
//baki 2 guest ko remove krny k lye splice use kr rhy hen
Guest_List.splice(0, 2);
console.log(Guest_List);
