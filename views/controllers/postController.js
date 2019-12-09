const fetch = require("axios");
const baseUrl = process.env.BASE_URL;

module.exports = {
  index: function(req, res) {
    fetch('http://127.0.0.1:8000/api/v1/posts', {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          showButton: false,
          posts: response.data.data,
        })
      })
  },
  show: function(req, res) {
    fetch(`http://127.0.0.1:8000/api/v1/posts/${req.params._id}`, {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          showButton: true,
          posts: [response.data.data]
        })
      }) 
  },

  destroy: function(req, res) {
    fetch(`http://127.0.0.1:8000/api/v1/posts/${req.params._id}`, {
      method: 'DELETE',
      headers: {
        'Accept':'application/json',
        'Authorization': req.cookies.token
      }
    })
      .then(response => {
        res.redirect('/')
      })  
  },

  create: function(req, res) {
    res.render('pages/create', {
      user: req.headers.authorization
    })
  }

}
