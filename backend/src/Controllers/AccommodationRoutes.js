const collection = require('../Models');

// ADD ACCOMODATION TO ACCOMODATIONS TABLE
exports.addAccommodation = async (req, res) => {
  try {
    const newAccomodation = new collection.Accomodation(req.body);
    await newAccomodation.save()
      .then(() => res.json('Accomodation Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};

// FIND ALL ACCOMODATIONS
exports.getAllAccommodations = async (req, res) => {
  try {
    const accomodations = await collection.Accomodation.find();
    res.json(accomodations);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
};
