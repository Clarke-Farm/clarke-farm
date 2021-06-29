const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  name: {
    type: String,
  },
  rating: {
    type: String,
  },
  comment: {
    type: String,
  },
  reviewDate: {
    type: String,
  },
}, {
  collection: 'reviews',
});

module.exports = mongoose.model('Review', reviewSchema);
