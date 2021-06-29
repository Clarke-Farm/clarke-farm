const express = require('express');

const Review = require('../models/reviewModel');

// Creating a Router
const router = express.Router();

// ADD REVIEW TO REVIEW'S TABLE
router.post('/reviews/add', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save()
      .then(() => res.json('Review Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL REVIEWS
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND REVIEW BY ID
router.get('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    res.json(review);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// SEARCH REVIEW e.g '/search-review?name=stephen' will retrieve stephen's review
router.get('/search-review', async (req, res) => {
  try {
    const reviews = await Review.find({ name: req.query.name });
    res.json(reviews);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// DELETE REVIEW
router.get('/delete-review/:id', async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.id });
    res.json('Review Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
