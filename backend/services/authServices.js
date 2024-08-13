const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envConfig');


module.exports.hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

module.exports.comparePassword = async (password,pass)=>{
    console.log("both",password,pass);
    const result = await bcrypt.compare(password,pass);
    console.log("after",result);
    return result;
}

module.exports.createToken = (user) => {
    return jwt.sign(user, JWT_SECRET, {
        expiresIn: '7d'
    });
}