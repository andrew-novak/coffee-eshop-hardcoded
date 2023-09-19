import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Badge, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { connect } from "react-redux";

import shopIcon from "static/shopIcon.png";
import NoSocialMediaPopup from "components/NoSocialMediaPopup";

const navButtonSize = 59;
const navPadding = 10;
const navBarMarginTop = navButtonSize + navPadding * 2;
const navBarMarginSide = navButtonSize;

const Screen = ({ children, maxWidth = 2000, cart }) => {
  const navigate = useNavigate();
  const totalQuantity = cart.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );

  // No Social Media Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        //backgroundColor: "#fcc9c9",
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
          <IconButton
            size="large"
            sx={{
              height: "56px",
              width: "56px",
              backgroundImage: `url(${shopIcon})`,
              backgroundSize: "cover",
            }}
            onClick={() => navigate("/")}
          ></IconButton>
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
          <NoSocialMediaPopup
            isOpen={isPopupOpen}
            handleClose={() => setIsPopupOpen(false)}
          />
          <IconButton size="large" onClick={() => setIsPopupOpen(true)}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton size="large" onClick={() => setIsPopupOpen(true)}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      {/* normal content */}
      <div
        style={{
          paddingTop: navBarMarginTop,
          paddingBottom: 22,
          paddingLeft: navBarMarginSide,
          paddingRight: navBarMarginSide,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth }}>
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
