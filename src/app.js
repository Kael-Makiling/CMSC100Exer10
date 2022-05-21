import express from "express";
import useRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";
//Initialize app
const app = express();

app.use(express.json());

// All user routes must go here
app.use('/api/user', useRouter);
app.use('/api/post', postRouter)

export default app;