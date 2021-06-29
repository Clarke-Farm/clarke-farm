const mongoose = require('mongoose');

const { Schema } = mongoose;

const accommodationSchema = new Schema({
  fileName: {
    type: String,
  },
  description: {
    type: String,
  },
  fee: {
    type: String,
  },
}, {
  collection: 'accommodations',
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
