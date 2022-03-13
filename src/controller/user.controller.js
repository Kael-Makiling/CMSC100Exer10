
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

export const logInUser = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await UserModel.findOne({email: data.email}).select(
            '+password'
        );
        //Checks if Email does exist
        if (!user) throw new Error('User does not exist');

        //Compare Password
        if (!(await user.comparePassword(data.password)))
            throw new Error('Incorrect Passord');
    
        res.status(200).json({status: "success", 
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            friends: user.friends,
            friendRequest: user.friendRequest,
            _id: user._id,
        })
    } catch (err) {
        //Default Error Code
        res.status(401).json({status: 'fail', message: err.message});
    }

}