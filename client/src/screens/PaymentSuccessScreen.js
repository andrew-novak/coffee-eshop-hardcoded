import { Typography } from "@mui/material";

import Screen from "components/Screen";
import { IS_STRIPE_LIVE_MODE } from "constants/general";

const PaymentSuccessScreen = () => (
  <Screen maxWidth="sm">
    <h1>Payment Successful!</h1>
    <Typography sx={{ fontSize: 18, marginBottom: 2 }}>
      {IS_STRIPE_LIVE_MODE === true
        ? "A receipt will be sent to the email address you provided during the checkout process."
        : "Please note that as our app is currently in demo mode, you will not receive a receipt at the email address provided during checkout, as Stripe does not send receipts in this mode."}
    </Typography>
    <Typography sx={{ fontSize: 24 }}>Thank you for your purchase!</Typography>
  </Screen>
);

export default PaymentSuccessScreen;
