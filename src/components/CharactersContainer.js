import React, { useState, useEffect } from "react";
import Input from "./Input";
import Character from "./Character";
import Axios from "axios";
import Error404 from "./Error404";

function CharactersContainer() {
  const [Characters, setCharacters] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  });

  const [err, setErr] = useState(false);

  useEffect(() => {
    console.log("calling API");
    var searchString = "";
    for (var property in query) {
      if (query[property] !== "") {
        searchString +=
          property === "page" ? "" : `&${property}=${query[property]}`;
      }
    }
    Axios.get(
      `https://rickandmortyapi.com/api/character/?page=${query.page}${searchString}`
    )
      .then(res => {
        if (!res.data.error) {
          setCharacters(res.data.results);
          setErr(false);
        } else {
          setCharacters([]);
        }
      })
      .catch(err => {
        if (err.response) {
          setErr(true);
        }
      });
  }, [query]);

  const charAreaStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  };

  const changeQuery = queryobj => {
    setQuery(queryobj);
  };

  return (
    <div className="row">
      <div className="col s4">
        <Input title="Characters" changeQuery={changeQuery} feilds={query} />
      </div>
      <div className="col s8 char-area" style={charAreaStyle}>
        {!err ? (
          Characters.map(item => <Character key={item.id} content={item} />)
        ) : (
          <Error404 />
        )}
      </div>
    </div>
  );
}

export default CharactersContainer;
