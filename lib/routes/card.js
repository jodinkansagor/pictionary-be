const { Router } = require('express');
const Card = require('../models/Card');
const chance = require('chance').Chance();

module.exports = Router()
  .post('/', (req, res, next) => {
    Card  
      .create(req.body)
      .then(card => res.send(card))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Card
      .findById(req.params.id)
      .then(card => {
        res.send(card.toJSON());
      })
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Card
      .find()
      .then(cards => {
        return chance.pickone(cards);
      })
      .then(card => res.send(card))
      .catch(next);
  });


