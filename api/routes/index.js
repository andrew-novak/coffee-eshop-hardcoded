const express = require("express");
const path = require("path");

// import subroutes
const products = require("./products");
const cart = require("./cart");
const createCheckoutSession = require("./createCheckoutSession");

const NODE_ENV = process.env.NODE_ENV;
const PROD_MEDIA = process.env.STRIPE_ESHOP_NO_ADMIN_PANEL_PROD_MEDIA;

const router = express.Router();

/*
// for all routes
router.options("/*", (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.header("Access-Control-Allow-Origin", "*");
  }
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});
*/

// serve development media
if (NODE_ENV === "development") {
  const mediaRoot =
    NODE_ENV === "production"
      ? PROD_MEDIA
      : path.join(__dirname, "../devMedia");
  console.log(`Media root path: ${mediaRoot}`);
  router.use("/media", require("serve-index")(mediaRoot));
  router.use("/media", express.static(mediaRoot));
}

// use imported subroute middlewares
router.use("/products", products);
router.use("/cart", cart);
router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
