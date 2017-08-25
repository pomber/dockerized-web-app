const express = require("express");
const app = express();

app.get("/api/cow", function(req, res) {
  res.send("Hello Worlds!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
