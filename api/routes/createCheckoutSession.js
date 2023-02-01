const stripe = require("../stripe");

const PRICE_ID = process.env.PRICE_ID;
const CLIENT_URL = process.env.CLIENT_URL;

const createCheckoutSession = async (req, res) => {
  const { cart } = req.body;
  const line_items = cart.map((product) => {
    return {
      price: PRICE_ID,
      quantity: product.quantity,
    };
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
