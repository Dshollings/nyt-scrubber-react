const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const Article = require("./client/src/models/Article.js");
mongoose.Promise = Promise;

// Initialize Express
const app = express();
// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytimes");
const db = mongoose.connection;

// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
app.get("/saved", function(req, res) {
  Articles.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
});

app.post("/saved", function(req, doc) {
      db.Articles.insert({"title": doc.title, "url":doc.url, "date": doc.date})
});

app.post("/saved", function(req, doc) {
      db.Articles.remove({"title": doc.title})
});

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.js"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
