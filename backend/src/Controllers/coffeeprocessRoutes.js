const collection = require('../Models');

// ADD CoffeeProcess TO coffeeProcesses TABLE
exports.addCoffeeprocess = async (req, res) => {
  try {
    const newCoffeeProcess = new collection.CoffeeProcess(req.body);
    await newCoffeeProcess.save()
      .then(() => res.json('CoffeeProcess Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};
