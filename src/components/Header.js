import React from "react";
import Banner from "../imgs/Heading.png";
import { Link } from "react-router-dom";

const Styles = {
  bannerStyle: {
    textAlign: "center",
    background: "#333333"
  },
  imageStyle: {
    height: "30vh",
    filter: "drop-shadow(0 0 30px #000)",
    cursor: "pointer"
  }
};

function Header() {
  return (
    <React.Fragment>
      <div className="banner" style={Styles.bannerStyle}>
        <Link to="/">
          <img src={Banner} className="" style={Styles.imageStyle} alt="" />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Header;
