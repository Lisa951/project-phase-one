'use strict';
//define the routes being used

//delete/sessions/id reuest? (sesion Termination - logging out)


//Health-Check endpoint?


let express = require('express');
let router = express.Router();

//create member

router.put('/:id', (req, res) => {
  let found = members.some(member => member.id ===parseInt(req.params.id));

  if(found) {
    let updMember = req.body;
    members.forEach(member => {
      if(member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;;
res.json({ msg: 'Member updated', member});
      }
    });
  } else{
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }
});
//form routes?

router.get('/name', (req, res) => res.json(members));

module.exports = router;
