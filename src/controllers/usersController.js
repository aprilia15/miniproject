const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const response = require('../helpers/responseFormatter.js');

module.exports = {

  register: function(req, res) {
    let password = bcrypt.hashSync(req.body.password, salt)
 
    User.create({
      email: req.body.email,
      encryptedPassword: password
    })
      .then(data => {
        response(res, [true, data], 200)
      })
      .catch(err => {
        response(res, [false, err], 422)
      })
  },

  login: function(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) return response(res, [false, "Email hasn't registered!"], 422) 
        let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.encryptedPassword);
        if (!isPasswordCorrect) return response(res, [false, "Wrong password!"], 422) 

        let token = jwt.sign({
          _id: user._id
        }, process.env.SECRET_KEY)

        response(res, [true, token], 200)
      })
      .catch(err => {
        response(res, [false, err], 422)
      })
  },

  whoAmI: function(req, res) {
    User.findById(req.headers.authorization._id)
      .then(data => {
        response(res, [true, data], 200)
      })
  }

}
