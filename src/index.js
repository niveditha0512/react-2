import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const date = Date(),
 var value;
var currentTime = new Date().getHours();
const styling={
  color:""
}

function greetings(x) {

  if (x===0 || x<=12){

  
  <h1> {value="Good Morning !", styling.color='red'
  }</h1>
  }
else if (x>12 && x<=18) {

<h1 style="color : red;">{value="Good Evening !"}</h1>

}
 else {

  <h1>{value="Good Night !"}</h1>
 }

return value;

}

const Header = () => {
  return (
  
      <div>
    <h1>{greetings(3)}</h1>
  </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);


