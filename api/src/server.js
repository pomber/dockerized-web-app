const express = require("express");
const app = express();
const cows = require("cows")();

app.get("/cow-api/cow", function(req, res) {
  const index = Math.floor(Math.random() * cows.length);
  res.send(cows[index]);
});

app.listen(80, function() {
  console.log("cow-api listening on port 80");
});
