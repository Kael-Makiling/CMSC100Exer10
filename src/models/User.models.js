import { Modal } from '@material-ui/core';
import mongoose from 'mongoose';
import { Schema , model } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lasName: String,
    email : String,
    password : String,
    friends : Array,
    friendRequest : Array,
    name : String,
});

export default model('User', UserSchema);