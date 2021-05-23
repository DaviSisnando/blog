const mongoose = require('mongoose');
const pagination = require('mongoose-paginate-v2');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

BlogSchema.plugin(pagination);

module.exports = mongoose.model('Blog', BlogSchema);