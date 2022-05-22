import express from 'express';
import { createPost, getPost } from "../controller/post.controller.js";

//Setting a route
const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);

export default router;