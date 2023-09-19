const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Check your console for the logs of the idToken`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
