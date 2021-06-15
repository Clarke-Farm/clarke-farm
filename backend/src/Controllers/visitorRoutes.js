const collection = require("../Models")

// ADD VISITOR TO VISITOR'S TABLE
exports.addVisitor = async (req, res) => {
  try {
    const newVisitor = new collection.Visitor(req.body);
    console.log(req.body);
    await newVisitor.save()
      .then(() => res.json('Visitor Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};

// add training visitor
exports.addTrainingVisitor = async (req, res) => {
  try {
    const newVisitor = new collection.Visitor(req.body);
    console.log(req.body);
    await newVisitor.save()
      .then(() => res.json('Visitor Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
};

// FIND ALL VISITORS
exports.getAllVisitors = async (req, res) => {
  try {
    const visitors = await collection.Visitor.find();
    res.json(visitors);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
};

// FIND VISITOR BY ID
exports.getVisitor = async (req, res) => {
  try {
    const visitor = await collection.Visitor.findOne({ _id: req.params.id });
    res.json(visitor);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
};

// SEARCH VISITOR e.g '/search-visitor?accomodationType=Cottage'
// will retrieve Cottage booked by visitor
exports.searchVisitor = async (req, res) => {
  try {
    const visitors = await collection.Visitor.find({ accomodationType: req.query.accomodationType });
    res.json(visitors);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
};

// UPDATE VISITOR
// Edit-icon onClick GETs this visitor.
exports.editorVisitor = async (req, res) => {
  // eslint-disable-next-line consistent-return
  collection.Visitor.findById(req.params.id, (error, data) => {
    if (error) {
      return (error);
    }
    res.json(data);
  });
};

// Update-button onClick, POSTs this visitor.
exports.updateVisitor = async (req, res, next) => {
  collection.Visitor.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
};

// DELETE VISITOR
exports.deleteVisitor = async (req, res) => {
  try {
    await collection.Visitor.deleteOne({ _id: req.params.id });
    res.json('Visitor Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
};

