import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #a5c9ca;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 0 0 20px;
  width: 300px;
  height: fit-content;
  border: 5px solid #395b64;
  border-radius: 5px;
  font-family: "Roboto Slab", serif;
  animation: aparecer 1s ease;
  @keyframes aparecer {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  -webkit-box-shadow: 16px 11px 24px 1px rgba(34, 87, 126, 0.41);
  -moz-box-shadow: 16px 11px 24px 1px rgba(34, 87, 126, 0.41);
  box-shadow: 16px 11px 24px 1px rgba(34, 87, 126, 0.41);
`;

const Tittle = styled.h4`
  font-size: 25px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #fff7e9;
  width: fit-content;
  background-color: #395b64;
`;

export default function Ciudad({ city }) {
  console.log(city);
  return (
    <div>
      <Container>
        <Tittle>{city.name}</Tittle>
        <span>Temperatura: {city.main.temp} º</span>
        <br />
        <span>Clima: {city.weather[0].description}</span>
        <br />
        <span>Viento: {city.wind.speed} km/h</span>
        <br />
        <span>Cantidad de nubes: {city.clouds.all}</span>
        <br />
        <span>Latitud: {city.coord.lat}º</span>
        <br />
        <span>Longitud: {city.coord.lon}º</span>
      </Container>
    </div>
  );
}
