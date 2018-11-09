const express = require('express');
const app = express();
const db = require('./models');
const morgan = require('morgan');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(morgan('dev'));
db.db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.redirect('/wiki');
});

const init = async () => {
  await db.db.sync({ force: true });
  app.listen(3000, () => {
    console.log('this is running on port: 3000');
  });
};
init();
