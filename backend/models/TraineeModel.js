const mongoose = require('mongoose');

const { Schema } = mongoose;

const traineeSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  groupsize: {
    type: String,
  },
  checkin: {
    type: String,
  },
  topics: {
    type: Array,
  },
  bookingtype: {
    type: String,
  },
  requests: {
    type: String,
  },
},
{ timestamps: true },
{
});

module.exports = mongoose.model('Trainees', traineeSchema);
