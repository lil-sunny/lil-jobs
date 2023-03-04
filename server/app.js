const express = require("express");

const app = express();
const PORT = 4308;

app.listen(PORT, function () {
  console.log("Server listening on port" + PORT);
});

app.get("/", function (req, res) {
    res.send('Glory to hero!');
});