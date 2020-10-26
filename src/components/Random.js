import React from 'react';

function Random(props) {

  let randomNum= Math.floor(Math.random() * (props.max - props.min) + props.min);

  return (
    //prop min max, retourner un nombre entre props.min et props.max
    
    <div className = "random">
      <p>Min was {props.min} and max was {props.max}, Random Number is {randomNum}</p>
    </div>

  )



}






export default Random;