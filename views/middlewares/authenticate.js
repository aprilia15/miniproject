const axios = require('axios');

module.exports = function(req, res, next) {
  let token = req.cookies.token ? req.cookies.token : null;
  if (!token) return res.redirect('/login');

  axios(`${process.env.BASE_URL}/api/v1/auth/whoAmI`, {
    method: 'GET',
    headers: {
      'Authorization': req.cookies.token,
      'Accept':'application/json'
    }
  })
    .then(response => {
      req.headers.authorization = response.data.data;
      next() 
    })
    .catch(err => {
      res.redirect('/login')
    })
}
