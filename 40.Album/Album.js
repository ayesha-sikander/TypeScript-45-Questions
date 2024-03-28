"use strict";
// Define the make_album function
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
console.log(album1); // Output: { artist: 'Artist1', title: 'Album1' }
const album2 = make_album("Artist2", "Album2", 12);
console.log(album2); // Output: { artist: 'Artist2', title: 'Album2', tracks: 12 }
const album3 = make_album("Artist3", "Album3", 15);
console.log(album3); // Output: { artist: 'Artist3', title: 'Album3', tracks: 15 }
