require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 4500;

mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
  useNewUrlParser: true,
});
const database = mongoose.connection;
database.on("error", (error) => {
  return console.log(error);
});
database.once("open", () =>
  console.log(`$connected to ${process.env.DATABASE_CONNECTION_URL}`)
);

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("This is the home page");
});
app.listen(port, () => console.log(`Server fired up on port number: ${port}`));
