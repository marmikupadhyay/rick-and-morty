import React from "react";
import Banner from "../imgs/Heading.png";

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
        <img
          src={Banner}
          className=""
          style={Styles.imageStyle}
          alt=""
          onClick={() => {
            window.location.assign("/");
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Header;
