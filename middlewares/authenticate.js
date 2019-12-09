const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let token = req.headers.authorization;
  let payload = jwt.verify(token, "INI RAHASIA", function(err, data) {
    if (err) return res.status(401).json({
      success: false,
      errors: "Invalid Token"
    })
    
    req.user = data;
    next();
  })
}
