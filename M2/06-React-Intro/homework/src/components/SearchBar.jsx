import React from "react";
import styled from "styled-components";

export default function SearchBar(props) {
  const Container = styled.div`
    font-family: "Roboto Slab", serif;
  `;

  const Texto = styled.input`
    margin-right: 25px;
    border-radius: 5px;
  `;

  const Boton = styled.button`
    background-color: green;
    border-radius: 5px;
    color: white;
    border: 1px solid green;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <Container>
      <Texto type="text" placeholder="Buscar..." />
      <Boton onClick={props.onSearch}>Agregar</Boton>
      <hr />
    </Container>
  );
}
