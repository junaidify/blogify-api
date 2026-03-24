import * as postsService from "../services/posts.service.js";

/**
 * GET /api/posts
 * Get all posts
 */
export const getPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();
    res.status(200).json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * GET /api/posts/:id
 * Get a single post by ID
 */
export const getPost = async (req, res) => {
  try {
    const post = await postsService.getPostById(req.params.id);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    // Handle invalid ObjectId format
    if (error.name === "CastError") {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/posts
 * Create a new post
 */
export const createPost = async (req, res) => {
  try {
    const post = await postsService.createPost(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res
        .status(400)
        .json({ success: false, error: messages });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * PATCH /api/posts/:id
 * Update a post
 */
export const updatePost = async (req, res) => {
  try {
    const post = await postsService.updatePost(req.params.id, req.body);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    if (error.name === "CastError") {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * DELETE /api/posts/:id
 * Delete a post
 */
export const deletePost = async (req, res) => {
  try {
    const post = await postsService.deletePost(req.params.id);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    if (error.name === "CastError") {
      return res
        .status(404)
        .json({ success: false, error: "Post not found" });
    }
    res.status(500).json({ success: false, error: error.message });
  }
};
