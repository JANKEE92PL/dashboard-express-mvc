let settingsJson = [{
    "user": "Seba",
    "default": {
        "darkMode": false,
        "sidebar": true,
        "showOnline": true
    },
    "prefered": {
        "darkMode": true,
        "sidebar": false,
        "showOnline": false
    }
}];

const settingsView = (req, res) => {
    res.render("settings", {path: req.path, settings: settingsJson});
};

module.exports = {
    settingsView
};