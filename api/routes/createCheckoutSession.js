const stripe = require("../stripe");

const Product = require("../models/Product");

const CLIENT_URL = process.env.CLIENT_URL;

const createCheckoutSession = async (req, res) => {
  const { cart } = req.body;

  // get all products related to this cart
  const ids = cart.map(({ id }) => id);
  const products = await Product.find({ id: { $in: ids } });

  const line_items = cart.map(({ id, quantity }) => {
    const price = products.find((product) => product.id === id).stripePriceId;
    return { price, quantity };
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${CLIENT_URL}/payment-success`,
    cancel_url: `${CLIENT_URL}/cart`,
  });
  res.status(200).json({ checkoutUrl: session.url });
  //res.status(303).redirect(session.url);
};

module.exports = createCheckoutSession;
