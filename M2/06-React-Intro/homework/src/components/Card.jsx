import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 195px;
    border: 5px solid #1f4d96;
    border-radius: 5px;
    font-family: "Roboto Slab", serif;
    transition: transform 1s;
    &:hover {
      transform: scale(1.2);
    }
  `;

  const Temp = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 15px;
    font-weight: 300;
  `;

  const TempContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Tittle = styled.h4`
    font-size: 25px;
    padding-top: 5px;
    color: #f3f3f3;
    width: 300px;
  `;

  const Boton = styled.button`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: red;
    color: #f3f3f3;
    width: 1.5em;
    height: 1.5em;
    border-radius: 4px;
    margin-right: 5px;
    margin-top: -13px;
    margin-left: -30px;
  `;

  const BotonContainer = styled.div`
    background-color: #1f4d96;
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    width: 300px;
    margin-top: -1px;
  `;

  const Imagen = styled.img`
    margin-top: -20px;
  `;

  return (
    <Container>
      <BotonContainer>
        <Tittle>{props.name}</Tittle>
        <Boton onClick={props.onClose}>
          <span>x</span>
        </Boton>
      </BotonContainer>
      <TempContainer>
        <Temp>
          <span>Temp. minima</span>
          <span>{props.min}º</span>
        </Temp>
        <Temp>
          <span>Temp. maxima</span>
          <span>{props.max}º</span>
        </Temp>
      </TempContainer>
      <Imagen
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="card-img"
      />
    </Container>
  );
}
