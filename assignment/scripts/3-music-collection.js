console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(record);
  return record;
}


console.log(addToCollection(myCollection,'The off-Season','J. Cole','2021'));
console.log(addToCollection(myCollection,'Cloud Nine', 'Kygo', '2016'));
console.log(addToCollection(myCollection,'2014 Forest Hills Drive', 'J. Cole', '2014'));
console.log(addToCollection(myCollection,'Laughter, Tears & Goosebumps', 'Fireboy DML', '2019'));
console.log(addToCollection(myCollection,'Bahil | Weg', 'Kassmasse', '2022'));
console.log(addToCollection(myCollection,'Ereft', 'Yohana', '2021'));
console.log(myCollection);



// 'The off-Season' 'J. Cole' '2021'
// 'Cloud Nine' 'Kygo' '2016'
// '2014 Forest Hills Drive' 'J. Cole' '2014'
// 'Laughter, Tears & Goosebumps' 'Fireboy DML' '2019'
// 'Bahil | Weg' 'Kassmasse' '2022'
// 'Ereft' 'Yohana' '2021'








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
