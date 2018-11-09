const express = require('express');
const router = express.Router();
const main = require('../views/main');
const { Page } = require('../models');
const { addPage } = require('../views');

router.get('/', (req, res) => {
  res.send(main(''));
});

router.post('/', (req, res) => {
  console.log(req.body);
  let title = req.body.authorname;
  res.json(req.body);
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
