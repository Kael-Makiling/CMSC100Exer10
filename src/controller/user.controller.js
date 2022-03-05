
import UserModel from "../models/User.model.js";
import userModel from "../models/User.model.js";
export const createUser = async (req,res,next) => {
    try {
        const data = await UserModel.create(req.body);
        res.status(201).json({
            firstName : data.firstName,
            lastName: data.lastName,
            email: data.email,
            friends: data.friends,
            friendRequest: data.friendRequest,
            _id: data._id,
        });
    } catch (err) {
        res.status(400).json(err);
    }
}