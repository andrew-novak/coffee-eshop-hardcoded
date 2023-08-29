const Stripe = require("stripe");

const { STRIPE_SECRET } = require("./constants/env.js");

const stripe = Stripe(STRIPE_SECRET);

module.exports = stripe;
