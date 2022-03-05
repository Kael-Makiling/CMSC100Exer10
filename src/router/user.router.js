import express from 'express';

//Setting a route
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
});

export default router;