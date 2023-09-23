const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { router } = require("./routes/products.router");

const port = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use("/api", router);
mongoose.connect(CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`App run on ${port}`);
  });
});
