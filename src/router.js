'use strict';
//define the routes being used

//delete/sessions/id reuest? (sesion Termination - logging out)

//Health-Check endpoint?

//for a post request we need to have something allowing 'add something to the form'
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

//create an entry when the user submits their form
router.post('/submit', validateContactFormMiddleware, async function(req, res, next) {
  await db.addcontactInfo(req.body);
  res.sendStatus(201);//resource was created
  next();
});

//Register a user
router.post('/register', function(req, res) {
  res.send('register a new user'); //2. create or register a user
});

//Log a registered user in
router.post('/session', function(req, res){
  res.send('Create a Session');//3.
});

//Get a list of alll submission
router.get('/allsubmissions', async function(req, res){
  res.send(await db.read());//4
});


//form routes?

// router.get('/create/allsubmissions', (req, res) => res.json(members));





module.exports = router;
