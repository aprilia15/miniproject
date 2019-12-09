const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let token = req.headers.authorization;
  let payload = jwt.verify(token, process.env.SECRET_KEY, function(err, data) {
    if (err) return res.status(401).json({
      success: false,
      errors: "Invalid Token"
    })
    
    req.headers.authorization = data;
    next();
  })
}
