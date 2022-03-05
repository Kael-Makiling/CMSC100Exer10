import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// console.log(process.env.MONGO_URI);
//Server
// dotenv.config({path:'../config.env'});
console.log("Awakening Port");
(async () => {
    await mongoose.connect("mongodb+srv://immtmakiling:FVGvpquZw7RSg90S@cluster0.caths.mongodb.net/exer10?retryWrites=true&w=majority");
    app.listen(5000);
    console.log("Connected to database");
})();
