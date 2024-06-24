const express = require("express");
const { connectDB } = require("./mongoConnection");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const productRoutes = require("./router/productRoutes");

app.use(cors());
app.use(express.json());
app.use(productRoutes);

if (process.env.NODE_ENV !== "test") {
  connectDB().then(async (error) => {
    if (error) {
    }
  });
}

exports.app = app;
