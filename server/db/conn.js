
const mongoose = require("mongoose");


const connString = "mongodb+srv://mern:mern123@cluster0.snef6s3.mongodb.net/merncrud?retryWrites=true&w=majority";


mongoose.connect(connString,{
    UseNewUrlParser:true,
    UseUnifiedTopology:true
}).then(() => console.log("connection start")).catch((error)=> console.log(error.message));