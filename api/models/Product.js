const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: Number,
  price: String,
  stripePriceId: String,
  title: String,
  description: String,
  mediaFilenames: [],
});

const Product = model("Product", ProductSchema);

module.exports = Product;
