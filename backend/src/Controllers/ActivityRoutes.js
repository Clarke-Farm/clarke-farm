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
