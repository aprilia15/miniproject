const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const router = require('./routes.js');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', router);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', require('./views/routes.js'));


mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(data => {
    app.listen(port, () => console.log(`Listening on port 5000!`))
  })
  .catch(err => {
    console.log('Failed to connect to database!')
  })
