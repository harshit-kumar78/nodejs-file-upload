const express = require('express');
const app = express();

var multer = require('multer');

var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, callback) {
    console.log(file);
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
app.post('/fileUpload', upload.single('profile'), (req, res) => {
  try {
    res.send(req.file);
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
