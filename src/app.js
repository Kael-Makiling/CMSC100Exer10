import express from "express";
import useRouter from "./router/user.router.js";

//Initialize app
const app = express();

app.use(express.json());

// All user routes must go here
app.use('/api/users', useRouter);

export default app;