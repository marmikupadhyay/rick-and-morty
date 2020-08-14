import React, { useState, useEffect } from "react";
import Input from "./Input";
import Axios from "axios";
import Episode from "./Episode";
import Error404 from "./Error404";

function LoactionsContainer() {
  const [Episodes, setEpsiodes] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    name: "",
    episode: ""
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
      `https://rickandmortyapi.com/api/episode/?page=${query.page}${searchString}`
    )
      .then(res => {
        setEpsiodes(res.data.results);
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
  const containerStyle = {};

  return (
    <div className="row" style={containerStyle}>
      <div className="col s4">
        <Input title="Episodes" changeQuery={changeQuery} feilds={query} />
      </div>
      <div className="col s8 area" style={AreaStyle}>
        {!err ? (
          Episodes.map(item => <Episode key={item.id} content={item} />)
        ) : (
          <Error404 />
        )}
      </div>
    </div>
  );
}

export default LoactionsContainer;
