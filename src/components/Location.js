import React from "react";

function Location(props) {
  const cardStyle = {
    width: "30%"
  };

  return (
    <div className="card blue-grey darken-1" style={cardStyle}>
      <div className="card-content">
        <span className="card-title white-text">{props.content.name}</span>
        <ul className="collection">
          <li className="collection-item">
            Type:{props.content.type ? props.content.type : "N.A"}
          </li>
          <li className="collection-item">
            Dimension:
            {props.content.dimension ? props.content.dimension : "N.A"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Location;
