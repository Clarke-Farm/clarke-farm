const mongoose = require('mongoose');

const { Schema } = mongoose;

const accomodationSchema = new Schema({
  accommodationtype: {
    type: String,
  },
  description: {
    type: String,
  },
  fee: {
    type: String,
  },
}, {
  collection: 'accomodations',
});

module.exports = mongoose.model('Accomodation', accomodationSchema);
