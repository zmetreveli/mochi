const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  img: String,
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
