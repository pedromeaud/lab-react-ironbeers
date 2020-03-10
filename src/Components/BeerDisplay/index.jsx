import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.scss';

const BeerDisplay = props => {
  console.log(props);
  return (
    <Link to={`/beers/${props._id}`}>
      <Card className="cardContainer" style={{ width: '20rem' }}>
        <Card.Img className="cardImg" variant="top" src={props.image_url} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.tagline}
            {props.contributed_by}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BeerDisplay;
