import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder = "Buscar..." />
      <button onClick={props.onSearch}>Agregar</button>
      <hr />
    </div>
  )
};