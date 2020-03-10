import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

const getBeers = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/beers')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const loadBeers = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/${id}`)
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

export { getBeers, loadBeers };
