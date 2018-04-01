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
    <div>
      <p>{listOfItem.title}</p>
    </div>
    <div>
      <p>{listOfItem.date}</p>
    </div>
    <div>
      <p>{listOfItem.location}</p>
    </div>
  </div>
);

export default Display;
