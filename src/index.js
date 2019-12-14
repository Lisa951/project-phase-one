'use strict';
let express = require('express');
let router = require('./router');//node.js modules to deal with file paths

let app = express();//initalize a vaiable called app with express
//routes

app.get('/',function(req, res){
  res.send('Contact Form');//send something to the browser
});
//post adding data
app.post('/create/submit', function(req, res){
  res.send('Create Submission');//1. first route to create an entry when the user submits their form
});
//register a user
app.post('/create/register', function(req, res){
  res.send('Register a user');//2. create or register a user
});
//log a registered user in
app.post('/create/session', function(req, res){
  res.send('Create a Session');//3.
});
app.get('/create/allsubmissions', function(req, res){
  res.send('List of all submissions');//4
});


//init middleware

app.use(express.json());// method returns a peice of middleware, to be used in the request process
app.use(router);

//error handler

app.use(function(req,res, next,error){

});

module.exports = function deafultErrorHandler(error, req, res, next) {
  console.error(error);

  if (req.headers.Send) next(error);
  else {
    res
      .status(500)
      .json({ error });
  }
};


let port = 3000;
app.listen(port, function () {
    console.log(`Express server started on port ${port}.`);
});

