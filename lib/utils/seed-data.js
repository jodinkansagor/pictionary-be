const csv = require('csvtojson');
const Card = require('../models/Card');
const path = require('../csv/words.csv');

function seedData() {
  return csv({ delimiter: ',' })
    .fromFile(__dirname + path)
    .then(csvToJSONFiles => {
      const cards = csvToJSONFiles
        .map(card => ({
          cardPhrase: card.Word,
          level: card.Level
        }));
      return Card.create(cards);
    })
    .then(() => console.log('seed data done'));
}

module.exports = {
  seedData
};
