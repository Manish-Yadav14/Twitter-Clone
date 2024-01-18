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
            res.status(400).send("User already exists")
        }

        const user = await User.create({name,email,password});

        if(user){
            res.send("User Created Successfully");
        }
        else{
            res.send("Failed to create User");
        }
    } 
    catch (error) {
        res.status(500).send(error);
    }
};


const authenticateUser = async (req,res)=>{
    const {email,password} = req.body;
    
    const user = await User.findOne({email,password});

    try {
        if(user){
            res.status(200).json({user});
        }
        else{
            error:"User Not Found";
        }   
    } catch (error) {
        console.log(error);
        
    }
}



module.exports ={createUser,authenticateUser};