import React, { useState } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////
// Estilos

const Container = styled.div`
  background-color: #2c3333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 120px;
  margin: 1em;
  border-bottom: 2px solid #2c3333;
  margin-top: 0px;
  padding-bottom: 10px;
`;

const H1 = styled.h1`
  margin-left: 50px;
  color: #fff7e9;
  font-family: "Roboto Slab", serif;
  font-weight: 600;
`;

const Span = styled.span`
  font-size: 20px;
  color: #fff7e9;
  margin: 60px;
`;

const SubContainer1 = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

const SubContainer2 = styled.div`
  display: flex;
  flex: row;
  margin-top: 2px;
  width: fit-content;
`;

////////////////////////////////////////////////////////////////////////////////////////////

export default function NavBar({ onSearch }) {
  return (
    <Container>
      <SubContainer2>
        <Link to={"/"}>
          <Span>Home</Span>
        </Link>
        <Link to={"/about"}>
          <Span>About</Span>
        </Link>
      </SubContainer2>
      <SubContainer1>
        <Link to={"/"}>
          <H1>Weather App</H1>
        </Link>
        <SearchBar onSearch={onSearch}></SearchBar>
      </SubContainer1>
    </Container>
  );
}
