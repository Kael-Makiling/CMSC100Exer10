import express from 'express';
import { createPost } from "../controller/post.controller.js";

//Setting a route
const router = express.Router();

router.post("/", createPost);

export default router;