import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/beers">
          <div>Beers</div>
        </Link>
        <Link to="/new-beer">
          <div>New Beer</div>
        </Link>
        <Link to="random-beer">
          <div>RandomBeer</div>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default Home;
