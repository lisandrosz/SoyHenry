import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #a5c9ca;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 195px;
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

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  font-weight: 400;
`;

const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tittle = styled.h4`
  font-size: 25px;
  font-weight: 600;
  padding-top: 5px;
  color: #fff7e9;
  width: 300px;
`;

const Boton = styled.button`
  background-color: #ff1e00;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff7e9;
  width: 1.5em;
  height: 1.5em;
  border-radius: 4px;
  margin-right: 5px;
  margin-top: -13px;
  margin-left: -30px;
  padding-top: 20px;
`;

const BotonContainer = styled.div`
  background-color: #395b64;
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

export default function Card(props) {
  return (
    <Container>
      <BotonContainer>
        <Link to={`/ciudad/${props.id}`}>
          <Tittle>{props.name}</Tittle>
        </Link>
        <Boton onClick={() => props.onClose(props.id)}>
          <span>x</span>
        </Boton>
      </BotonContainer>
      <TempContainer>
        <Temp>
          <span>Temp. minima</span>
          <span>{Math.floor(props.min)}º</span>
        </Temp>
        <Temp>
          <span>Temp. maxima</span>
          <span>{Math.floor(props.max)}º</span>
        </Temp>
      </TempContainer>
      <Imagen
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="card-img"
      />
    </Container>
  );
}
