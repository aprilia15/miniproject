const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./src/routes');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const viewRouter = require('./views/routes');
const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret:'INI RAHASIA',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    domain: '/'
  }
}))
app.use(morgan('dev'))
app.use('/api/v1', router);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', viewRouter);

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(data => {
    app.listen(port, () => { 
      console.log(`Server started at ${Date()}`)
      console.log(`Listening on port ${port}!\n\n\n\n`)
    })
  })
  .catch(err => {
    console.log('Failed to connect to database!')
  })
