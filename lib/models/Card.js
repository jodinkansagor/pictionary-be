const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cardPhrase: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Card', schema);
