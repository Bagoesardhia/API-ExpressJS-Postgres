// Import Library
const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Folder
const controller = require("./controller");

// Define Middleware
const router = Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors());

// API AddAcmin
router.post("/addAdmin", controller.addAdmin);

// API showAdmin
router.get("/showAdmin", controller.showAdmin);

module.exports = router;
