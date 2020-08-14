import React from "react";
import Characters from "../imgs/Characters.png";
import Locations from "../imgs/Location1.png";
import Episodes from "../imgs/Episodes.png";
import Portal from "../imgs/Portal.png";
import Portalframe from "./Portalframe";

const navStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "-5vh",
  height: "70vh"
};

function ImageNav() {
  return (
    <div style={navStyle}>
      <Portalframe
        source={Locations}
        back={Portal}
        width="25%"
        title="Locations"
      />
      <Portalframe
        source={Characters}
        back={null}
        width="40%"
        title="Characters"
      />
      <Portalframe
        source={Episodes}
        back={Portal}
        width="25%"
        title="Episodes"
      />
    </div>
  );
}

export default ImageNav;
