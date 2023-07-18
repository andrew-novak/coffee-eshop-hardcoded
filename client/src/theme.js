import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC3036",
    },
    error: {
      main: "#747474",
    },
  },
  custom: {
    heightPercentRatios: {
      "1:1": "100%",
      "4:3": "75%",
      "3:2": "66.6%",
      "16:9": "56.25%",
    },
  },
});

export default theme;
