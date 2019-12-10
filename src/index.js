'use strict';
let express = require('express');
let router = require('./router');//node.js modules to deal with file paths

let app = express();//initalize a vaiable called app with express

app.get('/',function(req, res){
  res.send('Create Submission');//send something to the browser
})


//init middleware

app.use(express.json());
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

