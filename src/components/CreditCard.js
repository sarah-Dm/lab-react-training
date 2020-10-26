import React from 'react';

function CreditCard(props) {
  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <div className="boxcolor" style={style}>
      <h3>{props.type}</h3>
      <h1>{props.number}</h1>
      <div>
        <p>
          Expires {props.expirationMonth}
          {props.expirationYear}
        </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
