// IMPORTING DEPENDENCIES
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// SERVING STATIC FILES WITH MIDDLEWARE FUNCTION express.static
app.use(express.static('uploads'));

// STORE FOR UPLOADED FILES
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage }).single('file');

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

// MANIPULATE DATABASE USING JSON
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ESTABLISHING DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (error) => {
    console.log(`Connection error: ${error.message}`);
  });

// APP ROUTES
const employeeRouter = require('./controllers/employeeRoutes');
const visitorRouter = require('./controllers/visitorRoutes');
const reviewRouter = require('./controllers/reviewRoutes');
const activityRouter = require('./controllers/activityRoutes');
const accommodationRouter = require('./controllers/accommodationRoutes');
const coffeeProcessRouter = require('./controllers/coffeeProcessRoutes');
const trainingRouter = require('./controllers/trainingRoutes');

app.use(employeeRouter);
app.use(visitorRouter);
app.use(reviewRouter);
app.use(activityRouter);
app.use(accommodationRouter);
app.use(coffeeProcessRouter);
app.use(trainingRouter);

// LOGOUT
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// SERVER LISTENING TO REQUESTS
app.listen(3000, () => {
  console.log('listening on port 3000');
});
