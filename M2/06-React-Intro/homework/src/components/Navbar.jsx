import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

export default function NavBar({ onSearch }) {
  const Container = styled.div`
    background-color: #22577e;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    margin: 1em;
    border-bottom: 2px solid #22577e80;
    margin-top: 0px;
  `;

  const H1 = styled.h1`
    margin-left: 50px;
    color: #faedf0;
    font-family: "Roboto Slab", serif;
    font-weight: 600;
  `;

  return (
    <Container>
      <H1>Weather App</H1>
      <SearchBar onSearch={onSearch}></SearchBar>
    </Container>
  );
}
