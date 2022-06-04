const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();


//edit signle user
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateuser);
        res.status(201).json(updateuser);
    }catch(error){
        res.status(404).json(error);
    }
})



//get single user
//get all users
router.get("/getuser/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const singleuser = await users.findById({_id:id});
        console.log(singleuser);   
        res.status(201).json(singleuser);  
    } catch (error) {
        res.status(404).json(error);
    }
});


//get all users
router.get("/getdata", async (req,res)=>{
    try {
        const userdata = await users.find();
        console.log(userdata);   
        res.status(201).json(userdata);  
    } catch (error) {
        res.status(404).json(error);
    }
});

//register single user
router.post("/register", async (req,res)=>{
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).send("pls fill all data");
    }

    try {
        const preuser = await users.findOne({email:email});
        console.log(`this is previous user ${preuser}`);

        if(preuser){
            res.status(404).send("user already present");
        }else{
            const addUser = users({
                name,email,age,mobile,work,add,desc
            });
            
            await addUser.save();
            res.status(201).json("success");
            console.log(addUser);
        }

    } catch (error) {
     console.log(error)   
    }

});

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;