'use strict';
//node.js
//handles the JSON file, how we read and write data/different files
let util = require('util');
let fs = require('fs');
let path = require('path');



let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);//use promises instead of callbacks

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('src/db.json');


//read

async function read() {
  let fileContents = await readFile(dbPath);//takes a file path and returns a promise
  let allContactEntries= JSON.parse(fileContents);
  console.log(fileContents);
  return allContactEntries;

}



async function write(dbItems) {//what do we want to write in the file
  let json = JSON.stringify(dbItems, null, 2);// The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  console.log(json);
  await writeFile(dbPath, json);
}

/**
 *
 */

 //for route 1 - adding an item to the db
async function addContactEntries(newContactEntry) {
  let allContactEntries = await read();
  allContactEntries.push(newContactEntry);
  await write(allContactEntries);
}


module.exports = {
  read: read,
  addcontactInfo: addContactEntries, //the return value of require is the value of module.exports its pointing at
};
