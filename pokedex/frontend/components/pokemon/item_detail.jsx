import React from 'react';

export default (props) => (
  <ul className="item-detail">
    <li><h3>{props.item.name}</h3></li>
    <li>Happiness: {props.item.happiness}</li>
    <li>Price: ${props.item.price}</li>
  </ul>
);
