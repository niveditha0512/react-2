import React from 'react';
import ReactDOM from 'react-dom';

var value;

var currentTime = new Date().getHours();

const display = {
  color: '',
};

function greetings(x) {
  if (x === 0 || x <= 12) {
    value = 'Good Morning !';
    display.color = 'red';
  } else if (x > 12 && x <= 18) {
    value = 'Good Evening !';
    display.color = 'blue';
  } else {
    value = 'Good Night !';
    display.color = 'green';
  }

  return value;
}

const Rule = () => {
  return (
    <div>
      <h1 style={display}>{greetings(currentTime)}</h1>
    </div>
  );
};

export default Rule;
