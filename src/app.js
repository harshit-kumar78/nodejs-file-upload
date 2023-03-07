const express = require('express');
const app = express();

var multer = require('multer');

var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
app.post('/fileUpload', upload.array('profile', 2), (req, res) => {
  try {
    res.send(req.files);
  } catch (err) {
    res.send(400);
  }
});

const port = 4500;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server up and running at ${port}`);
});
