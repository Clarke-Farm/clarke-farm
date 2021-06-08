// IMPORTING DEPENDENCIES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');


const app = express();
app.use(cors());

// MANIPULATE DATABASE USING JSON
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


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
  upload(req, res, (err) => {
    if (err) {
      return res.end('file not uploaded');
    }
    res.end('uploaded file successfully');
  });
});

// APP ROUTES
const activityRouter = require('./Routes/ActivityRoutes');

app.use(activityRouter);


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

// HANDLING NON-EXISTING ROUTES
app.get('*', (req, res) => {
  res.send('Error! Did not find that resource!');
});

// SERVER LISTENING TO REQUESTS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
