const express = require('express');

const CoffeeProcess = require('../models/coffeeProcessModel');

// Creating a Router
const router = express.Router();

// ADD CoffeeProcess TO coffeeProcesses TABLE
router.post('/coffee-processes/add', async (req, res) => {
  try {
    const newCoffeeProcess = new CoffeeProcess(req.body);
    await newCoffeeProcess.save()
      .then(() => res.json('CoffeeProcess Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL COFFEE PROCESSES
router.get('/coffee-processes', async (req, res) => {
  try {
    const coffeeProcesses = await CoffeeProcess.find();
    res.json(coffeeProcesses);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND COFFEE PROCESS BY ID
// Edit-icon onClick GETs this coffee-process.
router.get('/coffee-process/:id', async (req, res) => {
  try {
    const coffeeProcess = await CoffeeProcess.findOne({ _id: req.params.id });
    res.json(coffeeProcess);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE COFFEE PROCESS
// Update-button onClick, POSTs this coffee-process.
router.post('/update-coffee-process/:id', async (req, res, next) => {
  CoffeeProcess.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE COFFEE PROCESS
router.get('/delete-coffee-process/:id', async (req, res) => {
  try {
    await CoffeeProcess.deleteOne({ _id: req.params.id });
    res.json('CoffeeProcess Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
