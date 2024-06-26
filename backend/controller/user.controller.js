import User from "../models/user.model.js";

const signup = async (req, res, next) => {
   try{
    let {name, email, password, isAdmin} = req.body;
    let userexiste = await User.findOne({email});
    if(userexiste) {
        let err = new Error(`User with email ${email} already exists!`);
        err.status = 404;
        throw err;
    }
    let newuser = await User.create({
        name,
        email,
        password,
        isAdmin
    });
    res.send({
        message: "User registered successfully",
        user: {
            _id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            isAdmin:newuser.isAdmin
        },
    });
   }
   catch (err) {
    next(err);
   }
}

const login = async (req, res, next) => {
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user) {
            let err = new Error(`${email} not registered`);
            err.status = 400;
            throw err;
        }
        if(await user.matchPassword(password)) {
            res.send({message: "Login Success"});
        }
        else {
            let err = new Error("Invalid Password");
            err.status = 400;
            throw err;
        }
    } 
    catch(err) {
        next(err);
    }
}

export {signup, login};