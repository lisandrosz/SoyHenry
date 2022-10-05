import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import NavBar from "./components/Navbar";
import data, { Cairns } from "./data.js";
import styled from "styled-components";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    setCities((cities) => [...cities, city]);
  }

  function onClose(id) {
    setCities((cities) => cities.filter((city) => id !== city.id));
  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
