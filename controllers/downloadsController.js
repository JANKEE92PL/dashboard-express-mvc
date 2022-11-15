let downloadsJson = [{
    "title": "Title from File Awesome JPG FILE",
    "subtitle": "Subtitle File Awesome JPG FILE",
    "type": "jpg",
    "icon": "-jpg",
    "filesize": 300,
    "unit": "mb",
    "url": "filename.jpg",
    "online": true,
    "downloaded": true
}, {
    "title": "Title from File Awesome PNG FILE",
    "subtitle": "Subtitle File Awesome PNG FILE",
    "type": "png",
    "icon": "-png",
    "filesize": 80,
    "unit": "mb",
    "url": "filename.png",
    "online": true,
    "downloaded": false

}, {
    "title": "Title from File Awesome EXE FILE",
    "subtitle": "Subtitle File Awesome EXE FILE",
    "type": "exe",
    "icon": "",
    "filesize": 2,
    "unit": "gb",
    "url": "filename.exe",
    "online": false,
    "downloaded": true,
}]


const downloadView = (req, res) => {
    res.render("downloads", {path: req.path, data: downloadsJson});
};

module.exports = {
    downloadView
};