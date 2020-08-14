import React from "react";

function ImageNavItem(props) {
  const navItemStyle = {
    width: "100%",
    marginTop: "4vh"
  };

  const imageStyle = {
    width: "100%"
  };

  return (
    <div style={navItemStyle}>
      <img src={props.source} className="img-Item" style={imageStyle} alt="" />
    </div>
  );
}

export default ImageNavItem;
