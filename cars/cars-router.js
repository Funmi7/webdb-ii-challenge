const express = require('express');
const db = require('../data/db-config');
console.log(process.env.NODE_ENV);

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to retrieve cars ${error}` });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newCar => {
      res.status(201).json(newCar);
    });
  })
  .catch(error => {
    console.log('POST error', error);
    res.status(500).json({ message: `Failed to add new car ${error}` })
  })
})

module.exports = router;