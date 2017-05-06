var express = require("express");

var router = express.Router();

// Import the model (cake.js) to use its database functions.
var cake = require("../models/cake.js");

var quote = require("../data/cakeQuote.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  var oneQuote = quote[Math.floor(Math.random() * quote.length)];

  cake.all(function(data) {
    var hbsObject = {
      cakes: data,
      quote: oneQuote
    };
    // console.log("router working");
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  cake.create([
    "item_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cake.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;