'use strict';
//node.js
//handles the JSON file, how we read and write data/different files
let util = require('util');
let fs = require('fs');
let path = require('path');
let argon2 = require('argon2');
let db = require('../../db');




let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);//use promises instead of callbacks

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('src/db.json');


//read

async function read() {
  let fileContents = await readFile(dbPath);//takes a file path and returns a promise
  let allNames = JSON.parse(fileContents);
  console.log(fileContents);
  return allNames;

}




async function write(dbItems) {//what do we want to write in the file
  let json = JSON.stringify(dbItems, null, 2);// The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  console.log(json);
  await writeFile(dbPath, json);
}

/**
 *
 */

 //for route 1 adding an item to the db
async function addNames(newName) {
  let allNames = await read();
  allNames.push(newName);
  await write(allNames);
}


//route 2

   /* let hash = await argon.hash(req.body.password);
} catch (err) {
  //..error
}

try{
  if (await argon2.verify("<big long hash>", "password")) {
    //password match
  } else {
    //password did not match
  }
} catch (err){
  //internal failure
}
*/





module.exports = {
  read: read,
  addcontactInfo: addNames, //the return value of reuire is the value of module dot exports its pointing at
  get: getLoginRoute,
  post: postLoginRoute,
};
