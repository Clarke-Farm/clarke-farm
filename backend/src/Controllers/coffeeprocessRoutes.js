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

// FIND ALL COFFEE PROCESS
exports.getAllCoffeeprocesses = async (req, res) => {
  try {
    const coffeeProcesses = await collection.CoffeeProcess.find();
    res.json(coffeeProcesses);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
};
