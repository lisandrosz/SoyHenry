import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 1.8em;
  margin-right: -900px;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

export default function Loader() {
  return (
    <>
      <Svg viewBox="25 25 50 50">
        <Circle r="20" cy="50" cx="50"></Circle>
      </Svg>
    </>
  );
}
