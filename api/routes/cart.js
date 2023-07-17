const express = require("express");

const Product = require("../models/Product");

const products = [
  { id: 0, title: "T-Shirt", price: "£20.00" },
  { id: 1, title: "Joggers", price: "£32.99" },
];

const router = express.Router();

router.post("/details", async (req, res, next) => {
  const { cart } = req.body;
  console.log(`Received products count: ${cart.length}.`);
  console.log("cart:", cart);
  // TODO: make sure passed cart is correct e.g. every obj contains id and quantity props
  try {
    const cartProducts = await Product.find({
      $in: { id: [cart.map((product) => product.id)] },
    });
    if (cart.length !== cartProducts.length) throw new Error("");
    const productsForClient = cartProducts.map(
      ({ id, title, description, price, mediaFilenames }) => ({
        id,
        title,
        description,
        price,
        mediaFilenames,
      })
    );
    res.status(200).json({ cartProducts: productsForClient });
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
