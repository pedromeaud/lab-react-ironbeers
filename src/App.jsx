import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/NavBar';
import Home from './views/Home';
import ListOfBeers from './views/ListOfBeers';
import BeerDetail from './Components/BeerDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beer:id" exact component={BeerDetail} />
          <Route path="/random-beer" exact />
          <Route path="/beers" exact component={ListOfBeers} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
