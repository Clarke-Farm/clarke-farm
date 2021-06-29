const express = require('express');

const Accommodation = require('../models/accommodationModel');

// Creating a Router
const router = express.Router();

// ADD ACCOMMODATION TO ACCOMmODATIONS TABLE
router.post('/accommodations/add', async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    await newAccommodation.save()
      .then(() => res.json('Accommodation Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL ACCOMMODATIONS
router.get('/accommodations', async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND ACCOMMODATION BY ID
// Edit-icon onClick GETs this accommodation.
router.get('/accommodation/:id', async (req, res) => {
  try {
    const accommodation = await Accommodation.findOne({ _id: req.params.id });
    res.json(accommodation);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// SEARCH ACCOMMODATION e.g '/search-accommodation?name=cottage' will retrieve cottages
router.get('/search-accommodation', async (req, res) => {
  try {
    const accommodations = await Accommodation.find({ name: req.query.name });
    res.json(accommodations);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE ACCOMMODATION
// Update-button onClick, POSTs this accommodation.
router.post('/update-accommodation/:id', async (req, res, next) => {
  Accommodation.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE ACCOMMODATION
router.get('/delete-accommodation/:id', async (req, res) => {
  try {
    await Accommodation.deleteOne({ _id: req.params.id });
    res.json('Accommodation Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
