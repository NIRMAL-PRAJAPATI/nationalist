const express = require('express')
const app = express()

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/states', function (req, res) {
  res.render("states");
})

app.get('/economy', function (req, res) {
  res.render("economy");
})

app.get('/culture', function (req, res) {
  res.render("culture");
})

app.get('/politics', function (req, res) {
  res.render("politics");
})

app.get('/:username', function (req, res) {
  res.render("error", {states: req.params.username});
})

app.get('/states/gujarat', function (req, res) {
  res.render("gujarat");
})

app.get('/states/rajasthan', function (req, res) {
  res.render("rajasthan");
})

app.get('/states/uttar_pradesh', function (req, res) {
  res.render("uttar_pradesh");
})

app.get('/states/:username', function (req, res) {
  res.render("error", {states: req.params.username});
})

app.get('/politics/Parliament', function (req, res) {
  res.render("parliament");
})

app.get('/politics/:username', function (req, res) {
  res.render("error", {states: req.params.username});
})

app.listen(3000)