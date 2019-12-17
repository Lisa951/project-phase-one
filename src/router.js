'use strict';
//define the routes being used

//delete/sessions/id reuest? (sesion Termination - logging out)

//Health-Check endpoint?

//for a post request we need to have something allowing 'add something to the form'
let express = require('express');
let db = require('./db');
let router = express.Router();

//get a list of all submissions
// router.get('/create/allsubmissions', async function(req, res){
//   await db.addName(req.body);
//   res.sendStatus(201);//request has been fufilled
// });
// router.post('/create/allsubmissions', async function(req, res) {
//   await db.addName(req.body); //return promise
//   res.sendStatus(201);//request has been fufilled
// });
/*router.get('/',function(req, res){
  res.send('Contact Form');//send something to the browser
});*/


function validateContactFormMiddleware(req, res, next) {
  let contactInfo = req.body;
  if (!contactInfo.firstName) {
    res.status(400).send('"firstName" is a required field');
  } else if (!contactInfo.email) {
    res.status(400).send('"email" is a required field');
  } else {
    next();
  }
}

//post adding data
router.post('/submit', validateContactFormMiddleware, async function(req, res, next){
  await db.addcontactInfo(req.body);
  res.sendStatus(201);
  next();//1. first route to create an entry when the user submits their form
});
//register a user
router.post('/register', function(req, res){
  res.send('Register a user');//2. create or register a user
});
//log a registered user in
router.post('/session', function(req, res){
  res.send('Create a Session');//3.
});
router.get('/allsubmissions', async function(req, res){
  res.send(await db.read());//4
});


//form routes?

// router.get('/create/allsubmissions', (req, res) => res.json(members));





module.exports = router;
