import express from 'express';
import { createUser, logInUser } from "../controller/user.controller.js";


//Setting a route
const router = express.Router();

router.post("/", createUser);


router.post('/log-in', logInUser);

export default router;