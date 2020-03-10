import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src="/public/images/heading-ironbeers.png" alt="heading" />
      </Link>
    </div>
  );
}

export default Navbar;
