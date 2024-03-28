let Changing_Guest_List :string[] = ['Ayesha', 'Anaya', 'Habiba'] ;

for(let i=0; i<Changing_Guest_List.length; i++){
    console.log(`Dear Ms. ` + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
let absent_Guest :string = "Ayesha";
let new_Guest :string = "Tuba";  

Changing_Guest_List[0] = new_Guest;

for(let i=0; i<Changing_Guest_List.length; i++){
    console.log(`Dear, Ms. ` + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Ms. ${absent_Guest} is not coming to the party`)
