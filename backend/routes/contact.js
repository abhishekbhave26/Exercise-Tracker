const router = require('express').Router();
let Contact = require('../models/contact.model');

// creates a new contact request
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const email = req.body.email;
  
  const newContact = new Contact({
    name,
    description,
    email
  });

  newContact.save()
  .then(() => res.json('Thank you for your details, our team members will reach out to you'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// get all contact requests
router.route('/').get((req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
