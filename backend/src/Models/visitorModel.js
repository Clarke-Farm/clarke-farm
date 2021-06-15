const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitorSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  checkin: {
    type: String,
  },
  checkout: {
    type: String,
  },
  guestNumber: {
    type: String,
  },
  accomodation: {
    type: String,
  },
  bookingtype: {
    type: String,
  },
  requests: {
    type: String,
  },
  topics:{
    type: Array,
  }
},
{ timestamps: true },
{
  collection: 'visitors',
});

module.exports = mongoose.model('Visitor', visitorSchema);
