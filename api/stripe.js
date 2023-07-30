const Stripe = require("stripe");

const STRIPE_SECRET = process.env.COFFEE_ESHOP_HARDCODED_STRIPE_SECRET;

const stripe = Stripe(STRIPE_SECRET);

module.exports = stripe;
