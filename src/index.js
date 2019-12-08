'use strict';
let express = require('express');

let app = express();

app.get('/',function(req, res){
  res.send('Create Submission')
})




let port = 3000;
app.listen(port, function () {
    console.log(`Express server started on port ${port}.`);
});

