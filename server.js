const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
