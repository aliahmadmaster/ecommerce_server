require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
var cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(fileUpload());

mongoose.connect(process.env.Database_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

const routes = require("./routes");

app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use("/api", routes);
app.get("/*", (req, res) => res.send("Route not found!"));

app.listen(port, () => {
  console.log("server started");
});
