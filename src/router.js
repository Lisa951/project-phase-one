'use strict';
//define the routes being used

//delete/sessions/id reuest? (sesion Termination - logging out)

//Health-Check endpoint?

//for a post request we need to have something allowing 'add something to the form'
let express = require('express');
let db = require('./db');
let router = express.Router();

//get a list of all submissions
router.get('/create/allsubmissions', async function(req, res){
  await db.addName(req.body);
  res.sendStatus(201);//request has been fufilled
});
router.post('/create/allsubmissions', async function(req, res) {
  await db.addName(req.body); //return promise
  res.sendStatus(201);//request has been fufilled
});


//form routes?

router.get('/create/allsubmissions', (req, res) => res.json(members));





module.exports = router;
