import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  const ciudades = props.cities;

  const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
  `;

  return (
    <Container>
      {ciudades.map((city) => (
        <Card
          name={city.name}
          min={city.main.temp_min}
          max={city.main.temp_max}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}
        />
      ))}
    </Container>
  );
}
