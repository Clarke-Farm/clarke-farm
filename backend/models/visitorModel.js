const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitorSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  bookingType: {
    type: String,
  },
  visitorNum: {
    type: String,
  },
  accommodationType: {
    type: String,
  },
  requests: {
    type: String,
  },
  topics: {
    type: String,
  },
  checkin: {
    type: String,
  },
  checkout: {
    type: String,
  },
}, {
  collection: 'visitors',
});

module.exports = mongoose.model('Visitor', visitorSchema);
