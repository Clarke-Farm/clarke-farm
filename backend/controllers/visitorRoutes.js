const express = require('express');
const mongoose = require('mongoose');

// Mongoose provides options to work around deprecation warnings
// Make Mongoose use `findOneAndUpdate()`. this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const Visitor = require('../models/visitorModel');

// Creating a Router
const router = express.Router();

// ADD VISITOR TO VISITOR'S TABLE
router.post('/visitors/add', async (req, res) => {
  try {
    const newVisitor = new Visitor(req.body);
    await newVisitor.save()
      .then(() => res.json('Visitor Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL VISITORS
router.get('/visitors', async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND VISITOR BY ID
// Edit-icon onClick GETs this visitor.
router.get('/visitor/:id', async (req, res) => {
  try {
    const visitor = await Visitor.findOne({ _id: req.params.id });
    res.json(visitor);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE VISITOR
// Update-button onClick, POSTs this visitor.
router.post('/update-visitor/:id', async (req, res, next) => {
  Visitor.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE VISITOR
router.get('/delete-visitor/:id', async (req, res) => {
  try {
    await Visitor.deleteOne({ _id: req.params.id });
    res.json('Visitor Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
