const express = require('express');

const router = express.Router();
const Task = require('../Models/tasksModel');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Task(req.body);
    task.save().then((value) => {
      res.send(value);
    });
  } catch (error) {
    console.log(error);
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
