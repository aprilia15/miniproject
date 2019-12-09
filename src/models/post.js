const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  body: {
    type: 'string',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: {
    type: 'date',
    default: Date()
  }
});

module.exports = mongoose.model('Post', postSchema);
