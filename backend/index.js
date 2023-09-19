const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Check your console for the logs of the idToken`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
