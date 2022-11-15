let dataJson = [{
    "title": "Title from File Awesome JPG FILE",
    "subtitle": "Subtitle File Awesome JPG FILE",
    "filesize": 300,
    "unit": "mb",
    "url": "filename.jpg",
    "online": true
}, {
    "title": "Title from File Awesome PNG FILE",
    "subtitle": "Subtitle File Awesome PNG FILE",
    "filesize": 80,
    "unit": "mb",
    "url": "filename.png",
    "online": true
}, {
    "title": "Title from File Awesome EXE FILE",
    "subtitle": "Subtitle File Awesome EXE FILE",
    "filesize": 2,
    "unit": "gb",
    "url": "filename.exe",
    "online": false
}]


const filesView = (req, res) => {
    res.render("files", {path: req.path, data: dataJson});
};

module.exports = {
    filesView
};