
//For Register Page
const dashboardView = (req, res) => {

    res.render("dashboard", {
        user: req.user,
        path: req.path
    });
};

module.exports = {
    dashboardView
};
