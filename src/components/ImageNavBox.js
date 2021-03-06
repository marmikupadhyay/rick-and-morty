import React, { useState } from "react";
import ImageNavItem from "./ImageNavItem";
import { Link } from "react-router-dom";

function ImageNavBox(props) {
  const { source, title } = props;

  const [text] = useState(title);

  const padding = title === "Locations" ? "12vh" : "4vh";
  const imageBoxStyle = {
    width: "100%",
    padding: 20,
    paddingTop: padding,
    boxSizing: "boder-box"
  };
  const headingStyle = {
    margin: "20px 0",
    padding: 0,
    fontFamily: "rnmFont",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "5em",
    color: "#fff",
    textShadow: "10px 10px 40px #000",
    filter: "drop-shadow(0 0 70px black)"
  };
  return (
    <div style={imageBoxStyle} className="img-Box">
      <Link to={text}>
        <ImageNavItem source={source} />
        <h1 style={headingStyle} className="">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default ImageNavBox;
