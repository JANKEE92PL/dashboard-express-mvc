let settingsJson = [{
    "darkMode": true,
    "sidebar": true,
    "showOnline": true
}];


const settingsView = (req, res) => {
    res.render("settings", {path: req.path, settings: settingsJson});
};

module.exports = {
    settingsView
};