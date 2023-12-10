console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

//creates a record object from given parameters
//takes in array, string, string, string parameters
//adds the new record object to a parameter array
//returns the added record
function addToCollection(collection, title, artist, yearPublished){
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(record);
  return record;
}


console.log('Added', addToCollection(myCollection,'The off-Season','J. Cole',2021));
console.log('Added', addToCollection(myCollection,'Cloud Nine', 'Kygo', 2016));
console.log('Added', addToCollection(myCollection,'2014 Forest Hills Drive', 'J. Cole', 2014));
console.log('Added', addToCollection(myCollection,'Laughter, Tears & Goosebumps', 'Fireboy DML', 2019));
console.log('Added', addToCollection(myCollection,'Bahil | Weg', 'Kassmasse', 2022));
console.log('Added', addToCollection(myCollection,'Ereft', 'Yohana', 2021));
console.log('Records in collection', myCollection);


//displays all record objects on log
//takes in an array
function showCollection(collection){

  for (const record of collection){
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished} `);
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
console.log('test for Artist found in collection: ', findByArtist(myCollection, 'J. Cole'));

//test for Artist not in Collection
console.log('test for Artist not in Collection: ', findByArtist(myCollection, 'The Beatles'));

//search for album using searchCriteria object parameter
//returns an array
function search(collection, searchCriteria){
  let albums = [];

  if (searchCriteria !== undefined) {
    if (Object.keys(searchCriteria).length != 0 && searchCriteria.artist !== '') {
      for (const record of collection) {
        if (record.artist === searchCriteria.artist &&  (record.yearPublished == searchCriteria.year
          || record.yearPublished == searchCriteria.yearPublished)){
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

console.log('undefined', search(myCollection));
console.log('Empty Object', search(myCollection, {}));
console.log('No artist name provided', search(myCollection, { artist: '', year: 2014 }));
console.log('Album not in collectiion for that year', search(myCollection, { artist: 'J. Cole', yearPublished: 1999 }));
console.log('Album not in collection for this artist', search(myCollection, { artist: 'Jay', yearPublished: 2014 }));
console.log('Album found', search(myCollection, { artist: 'J. Cole', year: 2014 }));
console.log('Album found', search(myCollection, { artist: 'J. Cole', yearPublished: 2014 }));



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
