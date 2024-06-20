const express = require("express");
const { connectDB } = require("./mongoConnection");
const cors = require("cors");
const app = express();
const productRoutes = require("./router/productRoutes");

app.use(cors());
app.use(express.json());
app.use(productRoutes);

connectDB().then(() => console.log("Connected to database!"));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log("Server is up and running");
});
