const NODE_ENV = process.env.NODE_ENV;
const MONGO_URL = process.env.COFFEE_SHOP_MONGO_URL;
const API_PORT = process.env.COFFEE_SHOP_API_PORT;
const PROD_MEDIA = process.env.COFFEE_SHOP_PROD_MEDIA;
const STRIPE_SECRET = process.env.COFFEE_SHOP_STRIPE_SECRET;
const CLIENT_URL = process.env.COFFEE_SHOP_CLIENT_URL;

//const EMAIL_HOST = process.env.COFFEE_SHOP_EMAIL_HOST;
//const EMAIL_NAME = process.env.COFFEE_SHOP_EMAIL_NAME;
//const EMAIL_USERNAME = process.env.COFFEE_SHOP_EMAIL_USERNAME;
//const EMAIL_PASSWORD = process.env.COFFEE_SHOP_EMAIL_PASSWORD;

module.exports = {
  NODE_ENV,
  MONGO_URL,
  API_PORT,
  PROD_MEDIA,
  STRIPE_SECRET,
  CLIENT_URL,
  //EMAIL_HOST,
  //EMAIL_NAME,
  ///EMAIL_USERNAME,
  //EMAIL_PASSWORD,
};
