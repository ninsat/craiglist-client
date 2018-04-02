import React from 'react';

const Display = ({ listOfItem }) => (
  <div id="item">
    <div>
      <a href={listOfItem.url} target="_blank">
        <img src={listOfItem.images} alt="not found" />
      </a>
    </div>
    <div id="price">
      <p>{listOfItem.price}</p>
    </div>
    <div id="title">
      <p>{listOfItem.title}</p>
    </div>
    <div id="date">
      <p>posted on {listOfItem.date.slice(0, 10)}</p>
    </div>
    <div id="location">
      <p>{listOfItem.location}</p>
    </div>
  </div>
);

export default Display;
