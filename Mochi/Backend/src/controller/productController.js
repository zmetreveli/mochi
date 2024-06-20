const Product = require("../schema/productSchema");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProductById = async (req, res) => {
  const ProductId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, img } = req.body;
    if (!name || !description || !price || !img) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Invalid product data" });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const update = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, update, {
      new: true,
    });
    if (updatedProduct) {
      res.json({ message: "Product Updated Succsessfully", updatedProduct });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.json({ message: "product deleted successfully", deletedProduct });
    } else {
      res.status(500).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
