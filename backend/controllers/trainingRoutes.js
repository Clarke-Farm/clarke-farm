const express = require('express');

const Training = require('../models/trainingModel');

// Creating a Router
const router = express.Router();

// ADD TRAINING TO TRAININGS TABLE
router.post('/trainings/add', async (req, res) => {
  try {
    const newTraining = new Training(req.body);
    await newTraining.save()
      .then(() => res.json('Training Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL TRAININGS
router.get('/trainings', async (req, res) => {
  try {
    const trainings = await Training.find();
    res.json(trainings);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND TRAINING BY ID
// Edit-icon onClick GETs this training.
router.get('/training/:id', async (req, res) => {
  try {
    const training = await Training.findOne({ _id: req.params.id });
    res.json(training);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// SEARCH TRAINING e.g '/search-training?name=wet-processing' will retrieve wet-processing
router.get('/search-training', async (req, res) => {
  try {
    const trainings = await Training.find({ name: req.query.name });
    res.json(trainings);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE TRAINING
// Update-button onClick, POSTs this training.
router.post('/update-training/:id', async (req, res, next) => {
  Training.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE TRAINING
router.get('/delete-training/:id', async (req, res) => {
  try {
    await Training.deleteOne({ _id: req.params.id });
    res.json('Training Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
