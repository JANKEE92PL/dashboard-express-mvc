const express = require("express");

const {
    registerView,
    loginView,
    registerUser,
    loginUser,
    indexView,
    settingsView
} = require("../controllers/loginController");
const {dashboardView} = require("../controllers/dashboardController");
const {protectRoute} = require("../auth/protect");

const router = express.Router();


router.get("/register", registerView);
router.get("/settings", settingsView);
router.get("/login", loginView);
router.get("/", indexView);
//Dashboard
router.get("/dashboard", protectRoute, dashboardView);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
