const express = require('express');

const router = express.Router();
const uploads = require('../shared/multer')();
const Accomodation = require('../Models/accommodationModel');

router.get('/', async (req, res) => {
  try {
    const accomodation = await Accomodation.find({});
    res.send(accomodation);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', uploads.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const data = { ...req.body, filename };
    const activity = await Accomodation(data);
    activity.save();
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong with the upload');
  }
});

module.exports = router;
