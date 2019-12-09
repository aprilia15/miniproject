const Post = require('../models/post.js');
const response = require('../helpers/responseFormatter.js');

module.exports = {

  create: function(req, res) {
    req.body.user = req.headers.authorization._id
    Post.create(req.body)
      .then(data => {
        response(res, [true, data], 201)
      })
      .catch(err => {
        response(res, [false, err], 422)
      })
  },

  index: function(req, res) {
    Post.find({}).select(["_id","title","body", "created_at","user"]).populate({
      path: "user",
      select: ["_id","email"]
    })
      .then(data => {
        response(res, [true, data], 200);
      })
      .catch(err => {
        response(res, [false, err], 422)
      })
  },

  show: function(req, res) {
    Post.findById(req.params._id).select(["_id","title","body", "created_at","user"]).populate({
      path: "user",
      select: ["_id","email"]
    })
      .then(data => {
        response(res, [true, data], 200);
      })
      .catch(err => {
        response(res, [false, err], 422)
      })
  },

  destroy: function(req, res) {
    Post.findByIdAndDelete(req.params._id)
      .then(data => {
        res.status(200).json({
          success: true,
          data: "Post deleted!"
        })
      })
      .catch(err => {
        res.status(422).json({
          success: false,
          errors: "Failed to delete post!"
        })
      })
  }

}
