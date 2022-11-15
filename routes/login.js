const express = require("express");

const {
    registerView,
    loginView,
    registerUser,
    loginUser,
    indexView
} = require("../controllers/loginController");
const {dashboardView} = require("../controllers/dashboardController");
const {settingsView} = require("../controllers/settingsController");
const {filesView} = require("../controllers/filesController");
const {downloadView} = require("../controllers/downloadsController");
const {protectRoute} = require("../auth/protect");

const router = express.Router();


router.get("/login", loginView);
router.get("/register", registerView);
router.get("/dashboard", protectRoute, dashboardView);
router.get("/settings", protectRoute, settingsView);
router.get("/downloads", protectRoute, downloadView);
router.get("/files", protectRoute, filesView);
router.get("/", indexView);
//Dashboard

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
