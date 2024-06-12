import bycrypt from 'bcryptjs';


const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bycrypt.hashSync('1234', 8),
        isAdmin: true
    },
    {
        name: "Usuario",
        email: "usuario@example.com",
        password: bycrypt.hashSync('1234', 8),
    }
];

export default users;