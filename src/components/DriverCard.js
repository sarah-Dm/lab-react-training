import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="align-left box">
      <p>{props.name}</p>
      <Rating>{props.rating}</Rating>
      <img src="{props.img}" alt="" />
      <p>
        {props.car.model} -{props.car.licensePlate}
      </p>
    </div>
  );
}
export default DriverCard;
