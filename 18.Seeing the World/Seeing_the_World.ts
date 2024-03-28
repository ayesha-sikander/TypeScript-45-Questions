//Store the location in a array Make sure the array is not in alphabetical order
let places :string[] = ['Defence', 'Clifton', 'Garden', 'DHA', 'Saddar'];

//print your array in its orignal order
console.log('Orignal ' + places);

//print your array in alphabetical order without modifying the actual list
//array ki copy bna rhen hen ... in dots se
console.log('Copy ' + [...places].sort());

//show that your array is still in its orignal order by printing it
console.log('Orignal ' + places)

//print your array in reverse alphabetical order without changing  the order pf the orognal list
console.log('Copy ' + [...places].sort().reverse());

//show that your array is still in its orignal order by printin it again
console.log('Orignal ' + places);

//Reverse the order of your list Print the array to show that its order has changed
console.log('Orignal ' + [places].reverse());

//Reverse the order of your list again print the list to show its back  to its orignal order
console.log('Orignal ' + [places].reverse());


console.log('Orignal ' + places.sort());

console.log('Orignal' + [places].sort().reverse());
