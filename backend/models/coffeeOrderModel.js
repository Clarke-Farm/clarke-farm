const mongoose = require('mongoose');

const { Schema } = mongoose;

const coffeeOrderSchema = new Schema({
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
  package: {
    type: String,
  },
  order: {
    type: String,
  },
  requests: {
    type: String,
  },
  estimatedDelivery: {
    type: String,
    required: true,
  },
  delivered: Boolean,
  bookingtype: {
    type: String,
  },
},
{ timestamps: true },
{
  collection: 'orders',
});

module.exports = mongoose.model('orders', coffeeOrderSchema);
