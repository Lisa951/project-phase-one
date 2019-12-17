'use strict';
let express = require('express');
let router = require('./router');//node.js modules to deal with file paths

let app = express();//initalize a vaiable called app with express


//init middleware

app.use(express.json());// method returns a peice of middleware, to be used in the request process
app.use(router);

app.use(function (req, res, next){
  console.log('TestForm');//example text
  next();
})

//error handler

app.use(function(error, req, res, next) {
  console.error(error);
  res.sendStatus(500)//Internal Server Error
});




let port = 3000;
app.listen(port, function () {
    console.log(`Express server started on port ${port}.`);
});

