import React from "react";

function Character(props) {
  const cardStyle = {
    width: "30%"
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.content.image} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.content.name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.content.name}
          <i className="material-icons right">close</i>
        </span>
        <ul className="collection">
          <li className="collection-item">
            Status : {props.content.status ? props.content.status : "N.A"}
          </li>
          <li className="collection-item">
            Species : {props.content.species ? props.content.species : "N.A"}
          </li>
          <li className="collection-item">
            Type : {props.content.type ? props.content.type : "N.A"}
          </li>
          <li className="collection-item">
            Gender : {props.content.gender ? props.content.gender : "N.A"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Character;
