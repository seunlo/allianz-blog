import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createPost,
  delePost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/createpost", verifyToken, createPost);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, delePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);

export default router;
