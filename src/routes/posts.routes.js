import { Router } from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controller.js";

const router = Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

export default router;
