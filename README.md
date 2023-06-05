# Coffee Shop

Coffee Shop is an engaging portfolio website powered by Stripe, offering a delightful online shopping experience for coffee enthusiasts, where they can explore and purchase a variety of quality coffee products.

## To run API and client in development:

1. Make sure you are in the project root directory.

2. Install dependencies:
   `npm run install:all`

3. Create `.env` file based on `example.env`, but replace `<bracket values>` with your values.

- Make sure `NODE_ENV` is set to `"development"`
- You can leave `STRIPE_ESHOP_NO_ADMIN_PANEL_PROD_MEDIA` as an empty string (`""`)
- Use Stripe test key
- Use localhost for `STRIPE_ESHOP_NO_ADMIN_PANEL_CLIENT_URL`

4. Run:
   `npm run start:all`

## To deploy API for production:

1. Make sure you are in the project root directory.

2. Install dependencies:
   `npm run install:api`

3. Create `.env` file based on `example.env`, but replace `<bracket values>` with your values.

- Make sure `NODE_ENV` is set to `"production"`
- Set `STRIPE_ESHOP_NO_ADMIN_PANEL_PROD_MEDIA` to an absolute path of media directory on your server.
- Use Stripe production key
- Use production URL for `STRIPE_ESHOP_NO_ADMIN_PANEL_CLIENT_URL`

4. Rename `api` directory and copy it to your server.

5. Run using PM2

## To deploy client for production:

1. Make sure you are in the project root directory.

2. Install dependencies:
   `npm run install:client`

3. Run to generate an client .env file, but replace <YOUR_API_URL_HERE> with your API's url:
   `node ./client/beforeBuild/setApiUrl.js <YOUR_API_URL_HERE>`

4. Run to build the client app in `client/build` directory:
   `npm run build`

5. Rename `client/build` directory and copy it to your server.
