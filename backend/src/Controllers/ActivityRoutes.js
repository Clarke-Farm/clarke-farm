const collection = require('../Models');

// ADD ACTIVITY TO ACTIVITIES TABLE.
exports.addActivity = async (req, res) => {
  try {
    const newActivity = new collection.Activity(req.body);
    await newActivity.save()
      .then(() => res.json('Activity Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};

// FIND ALL ACTIVITIES
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await collection.Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
};
