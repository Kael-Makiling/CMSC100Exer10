import express from "express";
import { createPost, getPost } from "../controller/post.controller.js";
import PostModel from "../models/Post.model.js";

//Setting a route
const router = express.Router();

router.post("/", createPost);
// router.get("/", getPost);

router.get("/", function (req, res, next) {
  try {
    PostModel.find((err, result) => {
      if (!err) {
        console.log(result);
        res.render("index", { data: result });
      } else {
        console.log("Failed to retrieve posts: " + err);
      }
    });
  } catch (er) {
    console.log(er);
  }
});

export default router;
