const express = require("express");

const Product = require("../models/Product");

const products = [
  { id: 0, title: "T-Shirt", price: "£20.00" },
  { id: 1, title: "Joggers", price: "£32.99" },
];

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({});
    console.log(`Number of products found: ${products.length}`);
    const productsForClient = products.map(
      ({ id, title, description, price, mediaFilenames }) => ({
        id,
        title,
        description,
        price,
        mediaFilenames,
      })
    );
    res.status(200).json({ products: productsForClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Products retrieval error" });
  }
});

router.get("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({ productId });
    console.log(`Product with productId ${productId} found`);
    const { title, description, price, mediaFilenames } = product;
    const productForClient = {
      id: productId,
      title,
      description,
      price,
      mediaFilenames,
    };
    res.status(200).json({ product: productForClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Product retrieval error" });
  }
});

module.exports = router;
