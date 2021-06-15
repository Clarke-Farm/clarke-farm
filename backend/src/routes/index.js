const express = require("express")
const router = express.Router();
const visitorRoute = require('../Controllers/visitorRoutes');
const activityRouter = require('../Controllers/ActivityRoutes');
const accommodationRouter = require('../Controllers/AccommodationRoutes');
const coffeeprocessRouter = require('../Controllers/coffeeprocessRoutes');
const trainingRouter = require('../Controllers/trainingRoutes');

// Visitors Routes
router.post("/visitors/add", visitorRoute.addVisitor);
router.get("/visitors", visitorRoute.getAllVisitors);
router.get("/visitors/:id", visitorRoute.getVisitor);
router.get("/search-visitor", visitorRoute.searchVisitor);
router.get("/edit-visitor/:id", visitorRoute.editorVisitor);
router.post("/update-visitor/:id", visitorRoute.updateVisitor);
router.get("/delete-visitor/:id", visitorRoute.deleteVisitor);
router.post("/trainingvisit/add", visitorRoute.addTrainingVisitor);

// Activity Routes
router.post("/activities/add", activityRouter.addActivity);

// Training Routes
router.post("/trainings/add", trainingRouter.addTrainings)

// Accommodation Routes
router.post("/accomodations/add", accommodationRouter.addAccommodation);

// Coffeeprocess Route
router.post("/coffee-processes/add", coffeeprocessRouter.addCoffeeprocess);

module.exports = router;
