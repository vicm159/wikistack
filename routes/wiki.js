const express = require('express');
const router = express.Router();
const main = require('../views/main');
const { Page } = require('../models');
const { addPage } = require('../views');

router.get('/', (req, res) => {
  res.send(main(''));
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(page);
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }

  res.json(req.body);
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
