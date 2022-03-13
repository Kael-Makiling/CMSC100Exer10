import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('Awakening Port');

const start = async () => {
    await mongoose.connect(
        'mongodb+srv://immtmakiling:FVGvpquZw7RSg90S@cluster0.caths.mongodb.net/exer10?retryWrites=true&w=majority'
    );
    app.listen(5000);
    console.log('Connected to database');
};

start();
