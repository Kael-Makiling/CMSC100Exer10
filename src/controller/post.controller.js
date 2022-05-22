import { response } from "express";
import PostModel from "../models/Post.model.js";

export const createPost = async (req, res, next) => {
  try {
    const data = await PostModel.create(req.body);

    res.status(201).json({
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      content: data.createdBy,
    });
    //Test Possible Errors
  } catch (err) {
    if (err.code === 11000) {
      const email = err?.keyValue?.email;
      return res.status(400).json({
        status: "fail",
        message: `Post can't be empty!`,
      });
    }
    res.status(400).json(err);
  }
};

export const deletePost = async (req, res, next) => {
  const data = await PostModel.deleteOne(req.body.id);
  res.send(data);
};

export const editPost = async (req, res, next) => {
  var filter = { ObjectId: req.body.id };
  var update = { $set: { content: req.body.content } };

  PostModel.findOneAndUpdate(filter, update).exec(function (err, user) {
    //error is found
    if (err) {
      console.log(err);
      res.status(500).send(err);
      //User not found
    } else if (!user) {
      console.log("User not found!");
      res.status(200).send(user);
      //Successfully Updated User
    } else {
      console.log("Content is Updated!");
      res.status(200).send(user);
    }
  });
};
export const getPost = async (req, res, next) => {
  console.log("helo");
  PostModel.find().then((err, result) => {
    console.log(result);
    res.render("index", { data: result });
  });
};
