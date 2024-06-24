import User from "../models/user.model.js";


const signup = async (req, res, next) => {
   try{
    let {name, email, password, isAdmin} = req.body;
    let userexiste = await User.findOne({email});//{email: email => key and value same than only write email}
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

export {signup};