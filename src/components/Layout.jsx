import React from 'react';
import Menubar from './Menubar';

const Layout = ({ children }) => {
  return (
    <div>
      <Menubar />
      {children}
    </div>
  );
};


export default Layout;
