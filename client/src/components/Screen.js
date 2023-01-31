import { useNavigate } from "react-router-dom";
import { IconButton, Badge, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { connect } from "react-redux";

const navButtonSize = 59;
const navPadding = 10;
const navBarMargin = navButtonSize + navPadding * 2;

const Screen = ({ children, cart }) => {
  const navigate = useNavigate();
  const totalQuantity = cart.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
  return (
    <div
      style={{
        psoition: "relative",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        backgroundColor: "lightblue",
        minHeight: "100vh",
      }}
    >
      {/* static content */}
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* top header */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            //backgroundColor: "rgba(164, 103, 0, 0.41)",
            display: "flex",
            justifyContent: "space-between",
            padding: navPadding,
          }}
        >
          <IconButton size="large" onClick={() => navigate("/")}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
          <IconButton size="large" onClick={() => navigate("/cart")}>
            <Badge badgeContent={totalQuantity} color="primary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </div>
        {/* left social media bar */}
        <div
          style={{
            position: "absolute",
            //backgroundColor: "rgba(61, 212, 196, 0.37)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bottom: 0,
            padding: navPadding,
          }}
        >
          <IconButton size="large">
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton size="large">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div style={{ padding: navBarMargin }}>
        <Container maxWidth={false} sx={{ maxWidth: 2000 }}>
          {children}
        </Container>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { cart } = state;
  return { cart };
};

export default connect(mapState)(Screen);
