'use strict';
let express = require('express');
let router = require('./router');//node.js modules to deal with file paths

let app = express();//initalize a vaiable called app with express
//routes




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

