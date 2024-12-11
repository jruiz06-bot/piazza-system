const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: [String], enum: ['Politics', 'Health', 'Sport', 'Tech'], required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expirationTime: { type: Date, required: true },
  status: { type: String, enum: ['Live', 'Expired'], default: 'Live' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: [{ user: String, comment: String, createdAt: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('Post', postSchema);
