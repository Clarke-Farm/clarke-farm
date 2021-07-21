const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
  currency: String,
  cost: String,
});

module.exports = mongoose.model('foods', foodSchema);
