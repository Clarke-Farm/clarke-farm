const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
  activityname: {
    type: String,
  },
  description: {
    type: String,
  },
  fee: {
    type: String,
  },
}, {
  collection: 'activities',
});

module.exports = mongoose.model('Activity', activitySchema);
