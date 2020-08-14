import React from "react";
import ImageNavBox from "./ImageNavBox";

function Portal(props) {
  const { width, source, back, title } = props;
  const portalStyle = {
    width: width
  };

  return (
    <div className="portal" style={portalStyle}>
      <ImageNavBox
        style={portalStyle}
        source={source}
        back={back}
        title={title}
        width={width}
      ></ImageNavBox>
    </div>
  );
}

export default Portal;
