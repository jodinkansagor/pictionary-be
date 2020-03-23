const csv = require('csvtojson');
const Card = require('../models/Card');

function seedData() {
  return csv({ delimiter: ',' })
    .fromFile(__dirname + '../../lib/data/pictionary_words.csv')
    .then(csvToJSONFiles => {
      const cards = csvToJSONFiles.map(card => ({
        cardPhrase: card.cardPhrase,
        level: card.level
      }));
      return Card.create(cards);
    })
    .then(() => console.log('seed data done'));
}

module.exports = {
  seedData
};
