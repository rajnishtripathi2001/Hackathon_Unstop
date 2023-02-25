const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      id: String,
      title: String,
      desc: String,
      Thumbnail: String,
      students: Number,
    },
  ],
  blogs: [
    {
      id: String,
      title: String,
      link: String,
      Thumbnail: String,
      author: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
