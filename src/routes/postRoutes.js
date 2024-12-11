const express = require('express');
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authenticate, createPost);
router.get('/', authenticate, getPosts);
router.post('/:id/like', authenticate, likePost);
router.post('/:id/comment', authenticate, commentOnPost);

module.exports = router;
