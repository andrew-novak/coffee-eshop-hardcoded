const products = [
  { title: "T-Shirt", price: "£20.00" },
  { title: "Joggers", price: "£32.99" },
];

const getProducts = (req, res, next) => {
  return res.status(200).json({ products });
};

module.exports = getProducts;
