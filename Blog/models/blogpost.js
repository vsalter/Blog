const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);