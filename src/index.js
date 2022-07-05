import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const date = Date(),
 var value;
var currentTime = new Date().getHours();


function greetings(x) {

  if (x===0 || x<=12){

  
  <h1 style={{color : white}}> {value="Good Morning !"}</h1>
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
    <h1>{greetings(currentTime)}</h1>
  </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);


