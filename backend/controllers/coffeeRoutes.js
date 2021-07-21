const express = require('express');

const router = express.Router();
const Order = require('../Models/coffeeOrderModel');

router.get('/', async (req, res) => {
  try {
    const tasks = await Order.find({});
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Order(req.body);
    task.save();
    res.end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
