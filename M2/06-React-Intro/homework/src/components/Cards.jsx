import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const ciudades = props.cities
  return( 
    <div>
      {
        ciudades.map(
          city =>  <Card 
          name = {city.name} 
          min = {city.main.temp_min} 
          max= {city.main.temp_max} 
          img= {city.weather[0].icon}
          onClose= {() => alert(city.name)}
          key= {city.id}
          />)
      }
    </div>
  )
};