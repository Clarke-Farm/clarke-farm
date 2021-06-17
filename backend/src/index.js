// IMPORTING DEPENDENCIES
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const logger = require('./middlewares/logger');
const upload = require('./middlewares/upload');
const appRoutes = require('./routes');
const dbConnection = require('./config/db.config');

// middlewares
app.use(cors());
app.use(logger);
app.use(helmet());
// MANIPULATE DATABASE USING JSON
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// SERVING STATIC FILES WITH MIDDLEWARE FUNCTION express.static
app.use(express.static(path.resolve('./uploads')));

// ESTABLISHING DATABASE CONNECTION
dbConnection(process.env.DATABASE);

// UPLOAD FILE
app.post('/uploads', (req, res) => {
  // eslint-disable-next-line consistent-return
  upload(req, res, (err) => {
    if (err) {
      return res.end('file not uploaded');
    }
    res.end('uploaded file successfully');
  });
});

// The entire application routes.
app.use('/', appRoutes);

// // HANDLING NON-EXISTING ROUTES
// app.get('*', (req, res) => {
//   res.send('Error! Did not find that resource!');
// });

// SERVER LISTENING TO REQUESTS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
