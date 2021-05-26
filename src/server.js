require("dotenv").config();

import express, { json, static } from "express";
import { connect, connection } from "mongoose";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

app.use(json());
app.use(cors({ origin: "*" }));
app.use(fileUpload());

const db = require("./models");

db.connect(process.env.Database_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// db = connection;

db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

import routes from "./routes";

app.use("/public", static(path.resolve(__dirname, "public")));
app.use("/api", routes);
app.get("/*", (req, res) => res.send("Route not found!"));

app.listen(port, () => {
  console.log("server started");
});
