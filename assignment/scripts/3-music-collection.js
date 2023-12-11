console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

//creates a record object from given parameters
//takes in array, string, string, string parameters
//adds the new record object to a parameter array
//returns the added record
function addToCollection(collection, title, artist, yearPublished, tracks){
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  };

  collection.push(record);
  return record;
}


// console.log('Added', addToCollection(myCollection,'The off-Season','J. Cole',2021));
// console.log('Added', addToCollection(myCollection,'Cloud Nine', 'Kygo', 2016));
// console.log('Added', addToCollection(myCollection,'2014 Forest Hills Drive', 'J. Cole', 2014));
// console.log('Added', addToCollection(myCollection,'Laughter, Tears & Goosebumps', 'Fireboy DML', 2019));
// console.log('Added', addToCollection(myCollection,'Bahil | Weg', 'Kassmasse', 2022));
// console.log('Added', addToCollection(myCollection,'Ereft', 'Yohana', 2021));
// console.log('Records in collection', myCollection);


console.log('Added', addToCollection(myCollection,'The off-Season','J. Cole',2021,
[{name: '9 5 . s o u t h', duration: '3:17'},
  {name: 'a m a r i', duration: '2:29'},
  {name: 'm y . l i f e', duration: '3:39'},
  {name: 'a p p l y i n g . p r e s s u r e', duration: '2:58'},]
));
console.log('Added', addToCollection(myCollection,'Cloud Nine', 'Kygo', 2016,
[{name: 'Stole the show', duration: '3:43'},
{name: 'Fiction', duration: '4:04'},
{name: 'Raging', duration: '3:45'},
{name: 'Firestone', duration: '4:34'}]
));
console.log('Added', addToCollection(myCollection,'Bahil | Weg', 'Kassmasse', 2022,
[{name: 'Mela Mela', duration: '3:30'},
{name: 'Yehager Lij', duration: '3:10'},
{name: 'Yeman Nat', duration: '3:08'},
{name: 'Sewasew', duration: '4:36'},]
));

console.log('Records in collection', myCollection);


//displays each track name and duration of an album in a format
//    1. Stole the show 3:43
//    2. Fiction 4:04
function showTracks(trackArray){
  let tracks = ''
  for (let i = 0; i < trackArray.length; i++) {
    tracks += '\n' + (i+1) + '. ' + trackArray[i].name + ' ' + trackArray[i].duration
  }

  return tracks;
}

//displays all record objects on log
//takes in an array
function showCollection(collection){

  for (const record of collection){
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished} : ${showTracks(record.tracks)}
      `);
  }

}

showCollection(myCollection);

// finds albums by artist
// takes in a collection array, and a string
function findByArtist(collection, artist){
  let albums = [];

  for (const record of collection){
    if (record.artist === artist){
      albums.push(record);
    }
  }

  return albums;

}


//test for Artist found in collection
// console.log('test for Artist found in collection: ', findByArtist(myCollection, 'J. Cole'));
//
// //test for Artist not in Collection
// console.log('test for Artist not in Collection: ', findByArtist(myCollection, 'The Beatles'));

function trackIsInArray(trackArray, trackName){
  for (const track of trackArray) {
    if (track.name == trackName) {
      return true;
    }
  }

  return false;
}


console.log('is in track:', trackIsInArray(myCollection[0].tracks, ''));
//search for album using searchCriteria object parameter
//returns an array
function search(collection, searchCriteria){
  let albums = [];

  // console.log('search criteria artist',searchCriteria.yearPublished);
  if (searchCriteria !== undefined) {
    if (Object.keys(searchCriteria).length != 0 && (searchCriteria.trackName !== '' || searchCriteria.artist !== '')) {
      for (const record of collection) {
        if (trackIsInArray(record.tracks, searchCriteria.trackName) ||
        (record.artist === searchCriteria.artist &&
          (record.yearPublished == searchCriteria.year||
            record.yearPublished == searchCriteria.yearPublished))){
          albums.push(record);
        }
      }

    } else {

      return collection;

    }
  } else {

    return collection;

  }

  return albums;
}

// console.log('undefined', search(myCollection));
// console.log('Empty Object', search(myCollection, {}));
// console.log('No artist name provided', search(myCollection, { artist: '', year: 2014 }));
// console.log('Album not in collectiion for that year', search(myCollection, { artist: 'J. Cole', yearPublished: 1999 }));
// console.log('Album not in collection for this artist', search(myCollection, { artist: 'Jay', yearPublished: 2014 }));
// console.log('Album found', search(myCollection, { artist: 'J. Cole', year: 2014 }));
// console.log('Album found', search(myCollection, { artist: 'J. Cole', yearPublished: 2014 }));


console.log('Track not found (no artist provided and track name is empty string )', search(myCollection, { year: 2014, trackName: '' }));
console.log('Track not found (artist empty string and track name not provided )', search(myCollection, { artist: '', year: 2014 }));
console.log('Track not found (artist and track name not provided)', search(myCollection, { year: 2014}));
console.log('Track found with track name (No artist provided)', search(myCollection, { artist: '', year: 2014, trackName: 'a m a r i' }));
console.log('Album not found (no artist and track name provided)', search(myCollection, { artist: '', year: 2014, trackName: '' }));
console.log('Album found with artist name (no track name provided)', search(myCollection, { artist: 'J. Cole', yearPublished: 2021, trackName: '' }));
console.log('Track is found in album', search(myCollection, { artist: 'J. Cole', yearPublished: 2021, trackName:'a m a r i'}));
console.log('Track is not in album (non existing track name)', search(myCollection, { artist: 'J. Cole', year: 2021, trackName:'stole the show'}));










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
