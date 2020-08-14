import React, { useState, useEffect } from "react";
import Input from "./Input";
import Location from "./Location";
import Axios from "axios";
import Error404 from "./Error404";

function LoactionsContainer() {
  const [Locations, setLocations] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    name: "",
    type: "",
    dimension: ""
  });
  const [err, setErr] = useState(false);

  useEffect(() => {
    var searchString = "";
    for (var property in query) {
      if (query[property] !== "") {
        searchString +=
          property === "page" ? "" : `&${property}=${query[property]}`;
      }
    }
    Axios.get(
      `https://rickandmortyapi.com/api/location/?page=${query.page}${searchString}`
    )
      .then(res => {
        setLocations(res.data.results);
        setErr(false);
      })
      .catch(err => {
        if (err.response) {
          setErr(true);
        }
      });
  }, [query]);

  const AreaStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  };

  const changeQuery = queryobj => {
    setQuery(queryobj);
  };
  const containerStyle = {
    minHeight: "65vh"
  };

  return (
    <div className="row" style={containerStyle}>
      <div className="col s4">
        <Input title="Locations" changeQuery={changeQuery} feilds={query} />
      </div>
      <div className="col s8 area" style={AreaStyle}>
        {!err ? (
          Locations.map(item => <Location key={item.id} content={item} />)
        ) : (
          <Error404 />
        )}
      </div>
    </div>
  );
}

export default LoactionsContainer;
