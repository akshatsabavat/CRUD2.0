const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4500;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("This is the home page");
});
app.listen(port, () => console.log(`Server fired up on port number: ${port}`));
