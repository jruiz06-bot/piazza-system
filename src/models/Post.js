const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: [String], required: true },
  body: { type: String, required: true },
  owner: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
  status: { type: String, enum: ["Live", "Expired"], default: "Live" },
  likes: { type: [String], default: [] },
  dislikes: { type: [String], default: [] },
  comments: [
    {
      user: String,
      text: String,
    },
  ],
});

PostSchema.methods.updateStatus = function () {
  if (Date.now() > this.expiresAt) this.status = "Expired";
};

module.exports = mongoose.model("Post", PostSchema);
