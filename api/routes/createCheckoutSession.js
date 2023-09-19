const stripe = require("../stripe");

const Product = require("../models/Product");
const { CLIENT_URL } = require("../constants/env.js");

const createCheckoutSession = async (req, res) => {
  const { cart } = req.body;
  try {
    // get all products related to this cart
    const ids = cart.map(({ id }) => id);
    const products = await Product.find({ id: { $in: ids } });

    const line_items = cart.map(({ id, quantity }) => {
      const price = products.find((product) => product.id === id).stripePriceId;
      return { price, quantity };
    });

    // Adding shipping cost
    line_items.push({
      price_data: {
        currency: "gbp",
        product_data: {
          name: "Shipping Cost",
        },
        unit_amount: 1000,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${CLIENT_URL}/payment-success`,
      cancel_url: `${CLIENT_URL}/cart`,
    });

    return res.status(200).json({ checkoutUrl: session.url });
    //res.status(303).redirect(session.url);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error occurred during a checkout session" });
  }
};

module.exports = createCheckoutSession;
