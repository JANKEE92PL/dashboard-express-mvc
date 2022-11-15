let settingsJson = {
    "dark mode": true,
    "sidebar visible": false,
    "show Online status": false,
    "test": true
};

const settingsView = (req, res) => {
    res.render("settings", {path: req.path, settings: settingsJson});
};

module.exports = {
    settingsView
};