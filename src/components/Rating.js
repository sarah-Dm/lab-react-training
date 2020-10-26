import React from 'react';

function Rating(props) {
  let rating = Math.round(props.children);
  console.log(rating);
  let etoile;
  if (rating === 0) {
    etoile = '☆';
  }
  if (rating >= 1) {
    etoile = '★';
  }
  if (rating >= 2) {
    etoile = '★★';
  }
  if (rating >= 3) {
    etoile = '★★★';
  }
  if (rating >= 4) {
    etoile = '★★★★';
  }
  if (rating >= 5) {
    etoile = '★★★★★';
  }
  return (
    <div className="align-left">
      <div className="hide">{props.children}</div>
      <div>{etoile}</div>
    </div>
  );
}

export default Rating;
