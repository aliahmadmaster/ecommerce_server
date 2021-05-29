require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(fileUpload());

const db = require("./models");

// const routes = require("./routes");

app.use("/public", express.static(path.resolve(__dirname, "public")));
// app.use("/api", routes);
app.get("/", (req, res) => res.send("Welcome to Ecommerce System"));

app.get("/*", (req, res) => res.send("Route not found!"));

db.mongoose.connect(process.env.Database_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const conn = db.mongoose.connection;
conn.on("error", (error) => {
  console.log(error);
});
conn.once("open", () => {
  console.log("ecommerce_db connected");
  // require("")();
  app.listen(port, () => {
    console.log(`listning on http://localhost:${port}`);
  });
});
