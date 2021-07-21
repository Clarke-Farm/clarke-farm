const express = require('express');
const coffeeReviews = require('../Models/reviewModel')('coffeeReviews');
const visitorReviews = require('../Models/reviewModel')('visitorReviews');
const visitorModel = require('../Models/visitorModel');
const coffeeOrderModel = require('../Models/coffeeOrderModel');

const router = express.Router();

router.post('/visitor', async (req, res) => {
  const category = 'visitor';
  const verified = false;
  const reviewDetails = { ...req.body, category, verified };
  try {
    visitorModel.find({ email: req.body.email }).exec(async (err, response) => {
      if (response.length > 0) {
        const review = await visitorReviews(reviewDetails);
        review.save().then(() => res.json({ status: 'success' }));
      } else {
        res.json({ status: 'rejected' });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/coffee', async (req, res) => {
  const category = 'coffee';
  const verified = false;
  const reviewDetails = { ...req.body, category, verified };
  try {
    coffeeOrderModel.find({ email: req.body.email }).exec(async (err, response) => {
      if (response.length > 0) {
        const review = await coffeeReviews(reviewDetails);
        review.save().then(() => res.json({ status: 'success' }));
      } else {
        res.json({ status: 'rejected' });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
