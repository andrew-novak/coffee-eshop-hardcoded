const Stripe = require("stripe");

const STRIPE_SECRET = process.env.STRIPE_ESHOP_NO_ADMIN_PANEL_STRIPE_SECRET;

const stripe = Stripe(STRIPE_SECRET);

module.exports = stripe;
