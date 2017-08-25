const express = require("express");
const app = express();

app.get("/cows", function(req, res) {
  res.send("Hello Worlds!");
});

app.listen(80, function() {
  console.log("Example app listening on port 80!");
});
