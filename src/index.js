'use strict';
let express = require('express');
let router = require('./router');//node.js modules to deal with file paths

let app = express();//initalize a vaiable called app with express
let contact = [
  {id: 1, name: 'contacts1'},
  {id: 2, name: 'contacts2'},
  {id: 3, name: 'contacts3'},
];
app.get('/',function(req, res){
  res.send('Contact Form');//send something to the browser
});
//post adding data
app.post('/create/submit', function(req, res){
  res.send('Create Submission');//1. first route to create an entry when the user submits their form
});
//register a user
app.post('/create/register', function(req, res){
  res.send('Register a User');//2. create or register a user
});
//log a registered user in
app.post('/create/session', function(req, res){
  res.send('Create a Session');//3.
});
app.get('/create/submissions', function(req, res){
  res.send('List of all submissions');
});


app.get('/contact', function(req, res){
  res.send([contact]);
});

app.get('/contact/:id', function (req, res){
  let contacts = contact.find(c => c.id === parseInt(req.params.id));
  if(!contacts) res.status(404).send('The contact with the given ID was not found');
  res.send(contacts);
});

app.post('/contact/add', function (req, res){
  if (res.body.name || req.body.name.length <3) {
    //400 Bad Request
    res.status(400).send('Name is required and should be longer thean three characters');
    return;
  }
  let contact = {
    id: courses.length + 1,
    name: req.body.name
  };
  contact.push(contact);
  res.send(contact);
});

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  //...
  res.end()
});

//init middleware

app.use(express.json());// method returns a peice of middleware, to be used in the request process
app.use(router);

//error handler

app.use(function(req,res, next,error){

});

module.exports = function deafultErrorHandler(error, req, res, next) {
  console.error(error);

  if (req.headersSend) next(error);
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

