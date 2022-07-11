import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './components/App.js';

const Header = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
