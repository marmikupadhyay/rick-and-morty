import React from "react";

function Episode(props) {
  const cardStyle = {
    width: "30%"
  };

  return (
    <div className="card blue-grey darken-1" style={cardStyle}>
      <div className="card-content">
        <span className="card-title white-text">{props.content.name}</span>
        <ul className="collection">
          <li className="collection-item">Air Date:{props.content.air_date}</li>
          <li className="collection-item">
            Episode no and season : {props.content.episode}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Episode;
