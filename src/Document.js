import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const Document = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


export default Document;
