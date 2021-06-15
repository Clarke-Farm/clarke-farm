const collection = require('../Models');

// ADD TRAINING TO TRAININGS TABLE
exports.addTrainings = async (req, res) => {
  try {
    const newTraining = new collection.Training(req.body);
    await newTraining.save()
      .then(() => res.json('Training Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};
