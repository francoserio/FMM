var bodyParser = require('body-parser')
var path = require('path');
var multer  = require('multer');
var upload = multer();

var express = require('express');

var app = express();

app.set('views', './views');

var JSON = {"size": ""};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
  res.sendFile(__dirname + '/views/home.html');
});

app.post("/upload", upload.single('filetoupload'), function(req, res, next) {
  JSON["size"] = req.file.size;
  res.json(JSON);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("App is listening to port " + (process.env.PORT || 3000));
});
