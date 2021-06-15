const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
  programtitle: {
    type: String,
  },
  description: {
    type: String,
  },
  fee: {
    type: String,
  },
}, {
  collection: 'trainings',
});

module.exports = mongoose.model('Training', trainingSchema);
