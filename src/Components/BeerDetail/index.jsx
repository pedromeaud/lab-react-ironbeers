import React, { Component, Fragment } from 'react';
import { loadBeers } from './../../services/beers';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    loadBeers(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        {(beer && (
          <Fragment>
            <Card className="cardContainer" style={{ width: '20rem' }}>
              <Card.Img className="cardImg" variant="top" src={beer.image_url} alt={beer.name} />
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>
                  <small>{beer.first_brewed}</small>
                  {beer.description}
                  <small>{beer.attenuation_level}</small>
                  <small>{beer.tagline}</small>
                  {beer.contributed_by}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Fragment>
        )) ||
          ''}
      </div>
    );
  }
}

export default BeerDetail;
