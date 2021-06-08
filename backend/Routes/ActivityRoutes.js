const express = require('express');

const activityController = require('../Controllers/ActivityController');

// Creating a Router
const router = express.Router();

// ADD ACTIVITY TO ACTIVITIES TABLE.
router.post('/activities/add', activityController.addActivity);

module.exports = router;
