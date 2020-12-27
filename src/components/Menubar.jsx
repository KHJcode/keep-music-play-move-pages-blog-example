import React from 'react';
import { Link } from 'react-router-dom';


const Menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/author'>Author</Link>
        </li>
      </ul>
    </div>
  );
};


export default Menubar;
