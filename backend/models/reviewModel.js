const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  category: String,
  verified: Boolean,
  createdAt: String,
});

module.exports = function mapToSchema(schemaName) {
  return mongoose.model(`${schemaName}`, reviewSchema);
};
