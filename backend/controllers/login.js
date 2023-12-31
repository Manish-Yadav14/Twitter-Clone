const User = require('../models/user');

const createUser = async  (req,res)=>{
    try {
        const {name,email,password} = req.body;

        if (!name || !email || !password) {
            res.status(400);
            res.send("Please Enter all the Fields");
        }
        
        const userExists = await User.findOne({email});
        
        if(userExists){
            res.status(400);
            res.send("User already exists")
        }

        const user = await User.create({name,email,password});

        if(user){
            res.send("User Created Successfully")
        }else{
            res.send("Fails to create user");
        }
    } 
    catch (error) {
        res.status(500).send(error);
    }
};



module.exports = createUser;