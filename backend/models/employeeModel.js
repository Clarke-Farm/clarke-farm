const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeSchema = new Schema({
  fileName: {
    type: String,
  },
  role: {
    type: String,
  },
}, {
  collection: 'employees',
});

module.exports = mongoose.model('Employee', employeeSchema);
