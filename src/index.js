import React from 'react';
import ReactDOM from 'react-dom';

const date = Date();
var currentTime = new Date().getHours();
var morningValue, eveningValue, nightValue;

function greetings(time) {
  if (time === 0 && time < 12) {
    morningValue = 'Good Morning';
  }
  elseif(time >= 12 && time <= 18);
  {
    eveningValue = 'Good Evening';
  }
  else{
    nightValue = 'Good night';
  }
}

ReactDOM.render(
  <div>
    <h1>{console.log(greetings(currentTime))}</h1>
  </div>,

  document.getElementById('root')
);
