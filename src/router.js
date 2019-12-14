'use strict';
//define the routes being used

//delete/sessions/id reuest? (sesion Termination - logging out)

//Health-Check endpoint?

//for a post request we need to have something allowing 'add something to the form'
let express = require('express');
let db = require('./db');
let router = express.Router();

//create member
router.get('/names', async function(req, res){
  await db.addName(req.body);
  res.sendStatus(201);
});
router.post('/names', async function(req, res) {
  await db.addName(req.body); //return promise
  res.sendStatus(201);
});


//form routes?

router.get('/names', (req, res) => res.json(members));





module.exports = router;
