import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ImageNav from "./components/ImageNav";
import Footer from "./components/Footer";
import CharactersContainer from "./components/CharactersContainer";
import LoactionsContainer from "./components/LocationsContainer";
import EpisodesContainer from "./components/EpisodesContainer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route
          exact
          path="/"
          render={props => {
            return <ImageNav />;
          }}
        ></Route>
        <Route
          exact
          path="/characters"
          render={props => {
            return (
              <React.Fragment>
                <CharactersContainer />
              </React.Fragment>
            );
          }}
        ></Route>{" "}
        <Route
          exact
          path="/locations"
          render={props => {
            return (
              <React.Fragment>
                <LoactionsContainer />
              </React.Fragment>
            );
          }}
        ></Route>
        <Route
          exact
          path="/episodes"
          render={props => {
            return (
              <React.Fragment>
                <EpisodesContainer />
              </React.Fragment>
            );
          }}
        ></Route>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
