const mongoose = require("mongoose");
const { post } = require("../routes/posts");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    requireed: true,
  },
  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);