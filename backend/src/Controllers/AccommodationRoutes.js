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
