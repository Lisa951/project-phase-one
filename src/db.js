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
console.log(dbPath);

//read

async function read() {
  let fileContents = await readFile(dbPath);//takes a file path and returns a promise
  let allNames = JSON.parse(fileContents);
  return allNames;
}

/**
async function read(){
  return readFile(dbPath).then(function (fileContents){
    let json = JSON.parse(fileContents);
    return allNames;
  });
}
*/


async function write(dbItems) {//what do we want to write in the file
  let json = JSON.stringify(dbItems, null, 2);// The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  await writeFile(db.path, json);
}

/**
 *
 */
async function addNames(newName) {
  let allNames = await read();
  allNames.push(newName);
  await write(allNames);
}


module.exports = {
  read: read,
  addNames: addNames,
};
