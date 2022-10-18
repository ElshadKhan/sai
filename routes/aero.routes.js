const Router = require("express");
const router = new Router();
const aeroControllers = require("../controllers/aero.controllers.js");

router.get("/airport/list", aeroControllers.getAllAirports);
router.get("/airport/list/:id", aeroControllers.getOneAirport);
router.post("/airport/list/:id", aeroControllers.createAirport);
router.post("/airport/createAirplanemodel", aeroControllers.createAirplanemodel);
router.post("/airport/createFlightnumber", aeroControllers.createFlightnumber);
router.post("/airport/createPassengers", aeroControllers.createPassengers);
router.post("/airport/createEmployees", aeroControllers.createEmployees);

module.exports = router;
