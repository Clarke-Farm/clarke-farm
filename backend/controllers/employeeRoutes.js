const express = require('express');

const Employee = require('../models/employeeModel');

// Creating a Router
const router = express.Router();

// ADD EMPLOYEE TO EMPLOYEES TABLE
router.post('/employees/add', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
      .then(() => res.json('Employee Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL EMPLOYEES
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND EMPLOYEES BY ID
// Button "See Profile" onClick GETs this employee.
router.get('/employee/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({ _id: req.params.id });
    res.json(employee);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// SEARCH EMPLOYEE e.g '/search-employee?name=Sylvester' will retrieve Sylvester
router.get('/search-employee', async (req, res) => {
  try {
    const employees = await Employee.find({ name: req.query.name });
    res.json(employees);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE EMPLOYEE
// Update-Profile onClick, POSTs this employee.
router.post('/update-employee/:id', async (req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE EMPLOYEE
router.get('/delete-employee/:id', async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.params.id });
    res.json('Employee Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
