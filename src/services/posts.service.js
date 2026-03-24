import Post from "../models/post.model.js";

/**
 * Get all posts with populated author data
 */
export const getAllPosts = async () => {
  return await Post.find().populate("author");
};

/**
 * Get a single post by ID with populated author data
 */
export const getPostById = async (id) => {
  return await Post.findById(id).populate("author");
};

/**
 * Create a new post
 */
export const createPost = async (postData) => {
  const post = await Post.create(postData);
  return await post.populate("author");
};

/**
 * Update a post by ID
 */
export const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).populate("author");
};

/**
 * Delete a post by ID
 */
export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};
