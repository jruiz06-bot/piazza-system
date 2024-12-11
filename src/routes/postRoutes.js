const express = require("express");
const { createPost, getPostsByTopic } = require("../controllers/postController");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("/", authenticate, createPost);
router.get("/:topic", authenticate, getPostsByTopic);

module.exports = router;
