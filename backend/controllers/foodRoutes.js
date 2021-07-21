const express = require('express');

const router = express.Router();
const uploads = require('../shared/multer')();
const Food = require('../Models/foodModel');

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', uploads.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const data = { ...req.body, filename };
    const food = await Food(data);
    food.save();
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong with the upload');
  }
});

module.exports = router;
