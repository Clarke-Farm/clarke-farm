const express = require('express');

const Activity = require('../models/activityModel');

// Creating a Router
const router = express.Router();

// ADD ACTIVITY TO ACTIVITIES TABLE
router.post('/activities/add', async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    await newActivity.save()
      .then(() => res.json('Activity Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL ACTIVITIES
router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND ACTIVITY BY ID
// Edit-icon onClick GETs this activity.
router.get('/activity/:id', async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id });
    res.json(activity);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// SEARCH ACTIVITY e.g '/search-activity?name=biking' will retrieve biking activity
router.get('/search-activity', async (req, res) => {
  try {
    const activities = await Activity.find({ name: req.query.name });
    res.json(activities);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE ACTIVITY
// Update-button onClick, POSTs this activity.
router.post('/update-activity/:id', async (req, res, next) => {
  Activity.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE ACTIVITY
router.get('/delete-activity/:id', async (req, res) => {
  try {
    await Activity.deleteOne({ _id: req.params.id });
    res.json('Activity Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
