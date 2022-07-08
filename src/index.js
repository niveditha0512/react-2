import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

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
    //color = 'red';
  }

  return value;
}

const Header = () => {
  return (
    <div>
      <h1 style={display}>{greetings(currentTime)}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
