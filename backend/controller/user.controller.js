import asyncHandler from "../middleware/asynchandler.middleware.js";
import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import createToken from "../utils/token.utils.js";

const signup = asyncHandler( async (req, res, next) => {
    let {name, email, password, isAdmin} = req.body;
    let userexiste = await User.findOne({email});
    if(userexiste) {
        throw new ApiError(400, `User with email ${email} already exists!`)
    }
    let newuser = await User.create({
        name,
        email,
        password,
        isAdmin
    });
    createToken(res, newuser._id);

    res.send({
        message: "User registered successfully",
        user: {
            _id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            isAdmin:newuser.isAdmin
        },
    });
});

const login = asyncHandler(async (req, res, next) => {
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user) {
            throw new ApiError(400, `${email} not registered`)
            // let err = new Error(`${email} not registered`);
            // err.status = 400;
            // throw err;
        }
        if(await user.matchPassword(password)) {
            createToken(res, user._id);
            res.send({message: "Login Success"});
        }
        else {
            let err = new Error("Invalid Password");
            err.status = 400;
            throw err;
        }
});

let logout = asyncHandler((req, res) => {
    res.clearCookie("jwt");
    res.send("Logout Soccess!")
})

const getUsers = asyncHandler(async (req, res) => {
    let users = await User.find({}).select("-password");
    res.send(users);
});

const getUserProfile = asyncHandler(async (req, res) => {
    if(req.user) {
        res.send(req.user);
    }
})
export {signup, login, logout, getUsers, getUserProfile};