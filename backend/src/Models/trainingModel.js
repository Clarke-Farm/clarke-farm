const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
  filename: {
    type: String,
  },

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
