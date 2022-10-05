import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  const ciudades = props.cities;

  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 50px 0px 50px;
  `;

  if (props.cities) {
    return (
      <Container>
        {ciudades.map((city) => (
          <Card
            name={city.name}
            min={city.main.temp_min}
            max={city.main.temp_max}
            img={city.weather[0].icon}
            onClose={props.onClose}
            key={city.id}
            id={city.id}
          />
        ))}
      </Container>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
