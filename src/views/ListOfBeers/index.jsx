import React, { Component } from 'react';
import { getBeers } from '../../services/beers';
import BeerDisplay from '../../Components/BeerDisplay';

class ListBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    getBeers()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.beers.map(beer => (
            <BeerDisplay key={beer._id} {...beer} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBeers;
