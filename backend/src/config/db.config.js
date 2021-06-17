const mongoose = require('mongoose');

// DATABASE CONNECTION
const dbConnection = (url) => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (error) => {
      console.log(`Connection error: ${error.message}`);
    });
};

module.exports = dbConnection;
