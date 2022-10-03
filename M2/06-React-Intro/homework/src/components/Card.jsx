import React from 'react';

export default function Card(props) {
  return( 
    <div>
      <h4>{props.name}</h4>
      <div>
        <span>Min: {props.min}º </span>
      </div>
      <div>
        <span>Max: {props.max}º</span>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="card-img" />
        <button onClick={props.onClose}>x</button>
      </div>
      <hr />
    </div>
  )
};