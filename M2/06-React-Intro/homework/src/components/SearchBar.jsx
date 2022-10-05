import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
  width: 30%;
  height: 30px;
  margin-left: 50px;
`;

const Texto = styled.input`
  margin-right: 25px;
  border-radius: 5px;
  background-color: #f6f2d4;
`;

const Boton = styled.button`
  background-color: #5584ac;
  border-radius: 5px;
  color: white;
  border: 1px solid green;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function SearchBar({ onSearch }) {
  const [textState, setText] = useState("");

  const changeText = (evento) => {
    setText(evento.target.value);
  };

  const clickButton = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${textState}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => {
        onSearch(json);
      })
      .catch(() => alert("Error.. ciudad no encontrada"));
  };

  return (
    <Container>
      <Texto
        value={textState}
        type="text"
        placeholder="Buscar..."
        onChange={changeText}
        onKeyDown={clickButton}
      />
      <Boton onClick={clickButton}>Agregar</Boton>
      <hr />
    </Container>
  );
}
