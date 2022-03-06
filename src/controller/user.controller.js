
import UserModel from "../models/User.model.js";
export const createUser = async (req,res,next) => {
    try {
        const data = await UserModel.create(req.body);

        // Send user data
        res.status(201).json({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            friends: data.friends,
            friendRequest: data.friendRequest,
            _id: data._id,
        });
    } catch (err) {
        if (err.code === 11000) {
            const email = err?.keyValue?.email;
            return res.status(400).json({
                status: 'fail',
                message: `The email ${email} is already taken`,
            });
        }
        res.status(400).json(err);
    }
}