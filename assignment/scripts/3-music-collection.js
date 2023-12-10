console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

//creates a record object from given parameters (title, artist, yearPublished)
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


console.log('Added', addToCollection(myCollection,'The off-Season','J. Cole','2021'));
console.log('Added', addToCollection(myCollection,'Cloud Nine', 'Kygo', '2016'));
console.log('Added', addToCollection(myCollection,'2014 Forest Hills Drive', 'J. Cole', '2014'));
console.log('Added', addToCollection(myCollection,'Laughter, Tears & Goosebumps', 'Fireboy DML', '2019'));
console.log('Added', addToCollection(myCollection,'Bahil | Weg', 'Kassmasse', '2022'));
console.log('Added', addToCollection(myCollection,'Ereft', 'Yohana', '2021'));
console.log('Records in collection', myCollection);


//displays all record objects on log
function showCollection(collection){

  for (const record of collection){
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished} `);
  }

}

// `TITLE by ARTIST, published in YEAR`

showCollection(myCollection);







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
