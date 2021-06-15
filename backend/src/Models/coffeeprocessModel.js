const mongoose = require('mongoose');

const { Schema } = mongoose;

const coffeeProcessSchema = new Schema({
  filename: {
    type: String,
  },

  step: {
    type: String,
  },
  description: {
    type: String,
  },
}, {
  collection: 'coffee-processes',
});

module.exports = mongoose.model('CoffeeProcess', coffeeProcessSchema);
