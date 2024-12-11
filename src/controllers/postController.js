const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, topic, body, expiresIn } = req.body;
    const expiresAt = new Date(Date.now() + expiresIn * 60000);
    const post = new Post({ title, topic, body, owner: req.user.name, expiresAt });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPostsByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    const posts = await Post.find({ topic, status: "Live" });
    posts.forEach((post) => post.updateStatus());
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
