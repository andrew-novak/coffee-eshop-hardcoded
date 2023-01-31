const express = require("express");

const products = [
  { id: 0, title: "T-Shirt", price: "£20.00" },
  { id: 1, title: "Joggers", price: "£32.99" },
];

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.status(200).json({ products });
});

router.get("/:productId", (req, res, next) => {
  const { productId } = req.params;
  return res.status(200).json({ product: products[productId] });
});

module.exports = router;
