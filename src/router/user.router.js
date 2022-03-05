import express from 'express';
import { createUser } from "../controller/user.controller.js";

//Setting a route
const router = express.Router();

router.post("/", createUser);

export default router;