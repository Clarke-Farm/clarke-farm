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

// FIND ALL TRAININGS
exports.getAllTrainings = async (req, res) => {
  try {
    const trainings = await collection.Training.find();
    res.json(trainings);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
};
