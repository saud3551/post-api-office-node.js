const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//Middlewares
// app.use("/posts", () => {
//   console.log("this is a mifdle war runing");
// });

app.use(express.json());

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("helllo homepage");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("conected to db OMG")
);

app.listen(3000);