import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from './store/index';

const Document = () => {
  return (
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  );
};

export default Document;
