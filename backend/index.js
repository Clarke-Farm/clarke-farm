// IMPORTING DEPENDENCIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/images', express.static(path.join(__dirname, '/uploads')));

// APP ROUTES
const visitorRouter = require('./Controllers/visitorRoutes');
const activityRouter = require('./Controllers/activitiesRoutes');
const accomodationRouter = require('./Controllers/accomodationsRoutes');
const coffeeRouter = require('./Controllers/coffeeRoutes');
const foodRouter = require('./Controllers/foodRoutes');
const trainingRouter = require('./Controllers/trainingsRoutes');
const tasksRouter = require('./Controllers/tasksRoutes');
const traineeRouter = require('./Controllers/TraineeRoutes');
const reviewRouter = require('./Controllers/reviewRoutes');

app.use('/api/activities', activityRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/guests', visitorRouter);
app.use('/api/trainings', trainingRouter);
app.use('/api/coffee-orders', coffeeRouter);
app.use('/api/trainees', traineeRouter);
app.use('/api/accomodations', accomodationRouter);
app.use('/api/foods', foodRouter);
app.use('/api/reviews', reviewRouter);

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

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

// SERVER LISTENING TO REQUESTS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
