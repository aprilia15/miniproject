const fetch = require('axios');

module.exports = function(req, res, next) {
  fetch('localhost:5000/api/v1/auth/whoAmI', {
    method: 'GET',
    headers: {
      'Authorization': req.cookies.token,
      'Accept':'application/json'
    }
  })
    .then(data => {
      console.log(data);
      next()
    })
    .catch(err => {
      console.log(err);
      next();
    })
}
