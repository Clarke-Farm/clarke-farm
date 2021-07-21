const express = require('express');

const Training = require('../Models/trainingModel');

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
module.exports = router;
