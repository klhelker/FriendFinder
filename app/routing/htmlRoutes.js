var path = require("path");
const router = require("express").Router();

  // index route loads .html home page l
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  router.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
  module.exports=router
