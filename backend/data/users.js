import bcrypt from "bcryptjs";

const users = [
    {
        name: "admin",
        email: "admin@gamil.com",
        password: bcrypt.hashSync("password", 10),
        isadmin: true
    },
    {
        name: "admin1",
        email: "admin1@gamil.com",
        password: bcrypt.hashSync("password1", 10),
        isadmin: true
    },
    {
        name: "admin2",
        email: "admin2@gamil.com",
        password: bcrypt.hashSync("password2", 10),
        isadmin: true
    },
];

export default users;