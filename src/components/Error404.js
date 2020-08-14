import React from "react";
import Back from "../imgs/404.png";

function Error404() {
  const errorStyle = {
    background: `url(${Back})`,
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "contain",
    backgroundPosition: "center",
    filter: "drop-shadow(0px 0px 40px #000)",
    backgroundRepeat: "no-repeat",
    marginTop: "-15vh",
    zIndex: "-1"
  };

  const textStyle = {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-60%,-50%)",
    fontSize: "15em",
    color: "white",
    lineHeight: "20vh"
  };

  return (
    <div style={errorStyle}>
      <span className="text" style={textStyle}>
        404
        <p style={{ fontSize: "2rem", textAlign: "center" }}>
          Resource Not Found
        </p>
      </span>
    </div>
  );
}

export default Error404;
