'use strict';

let express = require('express');
let db = require('./db');
let router = express.Router();




function validateContactFormMiddleware(req, res, next) {
  let contactInfo = req.body;
  if (!contactInfo.firstName) {
    res.status(400).send('"firstname" is a required field');
  } else if (!contactInfo.email) {
    res.status(400).send('"email" is a required field');
  } else {
    next();
  }
}

//1. create an entry when the user submits their form
router.post('/submit/contact', validateContactFormMiddleware, async function(req, res, next) {
  await db.addcontactInfo(req.body);
  res.sendStatus(201);
  next();
});


//2. Register a user
router.post('/newuser', function(req, res) {
  res.sendStatus(201);
});


//3. Log a registered user in
router.post('/login', function(req, res){
  res.send('User Login');
});


//4. Get a list of all submission
router.get('/allsubmissions', async function(req, res){
  res.send(await db.read());
});




module.exports = router;
