const { validationResult } = require('express-validator');
const UserModel = require('../models/User');
const { hashedPassword, createToken,comparePassword } = require('../services/authServices');




// @route POST /api/register
// @access Public 
// @desc Create User and return a token
module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { name, email, password } = req.body;
        try {
            const emailExist = await UserModel.findOne({ email });
            if (!emailExist) {
                const hashed = await hashedPassword(password);

                const user = await UserModel.create({
                    name: name,
                    email: email,
                    password: hashed,
                    admin: false
                });

                // Create Token
                const token = createToken({ id: user._id, name: user.name });

                return res.status(201).json({ msg: "Your Account has been created", token: token });

            } else {
                return res.status(401).json({ errors: [{ msg: `${email} is already taken` }] })
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json("Server Internal Error ");
        }
    } else {
        // If validation Failed
        return res.status(400).json({ error: errors.array() })
    }
}


// @route POST /api/login
// @access Public 
// @desc Login user and return a token
module.exports.login = async(req,res)=>{
    const {email,password} = req.body;
    

    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        try {
            
            const user = await UserModel.findOne({email});
            if(user){
                const pass = user.password;
                const result = await comparePassword(password,pass);
                console.log("Result is ", result);
                if(result){
                    const token = createToken({id:user._id,name:user.name});

                    if(user.admin){
                        return res.status(201).json({token,admin:true});
                    }else{
                        return res.status(201).json({token,admin:false});
                    }

                }else{
                    
                    return res.status(401).json({errors:[{msg:'Password not matched'}]})
                }

            }else{
                return res.status(401).json({errors:[{msg:`${email} is not found`}]})
            }

        } catch (error) {
            console.log(error.message);
            return res.status(500).json('Server Internal Error');
        }
    }else{
        // Validation failed
        return res.status(401).json({errors:errors.array()})
    }
}