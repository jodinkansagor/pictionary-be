const { Router } = require('express');
const Card = require('../models/Card');

module.exports = Router()
  .post('/', (req, res, next) => {
    Card  
      .create(req.body)
      .then(card => res.send(card))
      .catch(next);
  });

