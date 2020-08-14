import React, { useState, useEffect } from "react";

function Input(props) {
  const headStyle = {
    margin: 0,
    padding: 10,
    borderTop: "10px solid #00afc7",
    borderRadius: "10px"
  };
  const boxStyle = {
    padding: 20,
    borderRadius: "10px"
  };

  const [query, setQuery] = useState(props.feilds);

  const inputHandle = e => {
    const { name, value } = e.target;
    setQuery(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const makeInputs = () => {
    var content = [];
    var icons = {
      page: "find_in_page",
      name: "account_circle",
      status: "sick",
      species: "accessibility",
      type: "supervised_user_circle",
      gender: "wc",
      dimension: "public",
      episode: "tv"
    };
    for (const property in query) {
      content.push(
        <div className="input-field col s12" key={property}>
          <i className="material-icons prefix">{icons[property]}</i>
          <input
            value={query[property]}
            id={property}
            type="text"
            name={property}
            className="validate"
            onChange={inputHandle}
          />
          <label htmlFor={property}>Search {property}</label>
        </div>
      );
    }
    return content;
  };

  return (
    <React.Fragment>
      <div className="grey lighten-3" style={{ ...boxStyle, padding: "0px" }}>
        <h1 style={headStyle}>{props.title}</h1>
      </div>
      <br />
      <div className="input-box grey lighten-3" style={boxStyle}>
        <div className="row" style={{ margin: 0 }}>
          {makeInputs()}
        </div>
      </div>
      <br />
      <div style={{ ...boxStyle, width: "100%" }} className="grey lighten-3">
        <button
          className="btn waves-effect waves-light"
          style={{ width: "100%" }}
          name="action"
          onClick={() => {
            props.changeQuery(query);
          }}
        >
          Search
          <i className="material-icons right">search</i>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Input;
