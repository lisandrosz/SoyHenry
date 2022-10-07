import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/Navbar";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    setCities((cities) => [...cities, city]);
  }

  function onClose(id) {
    setCities((cities) => cities.filter((city) => id !== city.id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return alert("HOLA");
    }
  }
  return (
    <div className="App">
      <Route path={"/"} render={() => <NavBar onSearch={onSearch} />} />

      <Route path={"/about"} component={About} />

      <Route
        exact
        path={"/"}
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
        exact
        path={`/ciudad/:ciudadId`}
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;
