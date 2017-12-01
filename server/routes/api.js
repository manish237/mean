'use strict'

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();




router.get('/', (req, res) => {
  return res.status(200).json({message: 'Internal server error'});


});






module.exports = router;
