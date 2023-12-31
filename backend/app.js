const express = require('express');
const app = express();
const connectDB =require('./db/connect');
require('dotenv').config();

//routes
const createUser = require('./routes/login');

app.use(express.json());
app.use(express.static('./frontend'));

app.use('/api/v2/signup',createUser);


const port = process.env.Port || 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is Listening on Port ${port}...`);
        });    
    } catch (error) {
        console.log(error);
    }
}

start();
