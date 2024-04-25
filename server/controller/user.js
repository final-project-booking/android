const {user} = require("../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register:async function(req,res){
     try {
        const {firstName,lastName,email,password,location,gender,age,phoneNumber,role}=req.body
        const saltRounds = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newUser=await user.create({data:{firstName,lastName,email,password:passwordHash,location,gender,age:parseInt(age),phoneNumber:parseInt(phoneNumber),role}})
        res.status(200).send(newUser)   
     } catch (error) {  
        throw error
     }
    },
 
    login:async function(req,res){
     const {email,password}=req.body
     const foundUser=await user.findUnique({where:{email}})
     if(!foundUser){
        return res.status(400).json('Your Email Is Not Exist')
     }
     const clean = await bcrypt.compare(password, foundUser.password)
     if(!clean){
        return res.status(400).json('Your Password Is Not Exist')
     }
     const token = jwt.sign({ id: foundUser.id },  process.env.SECRET_KEY);
     console.log(token);
    //  const userData = JSON.stringify(foundUser);
     delete foundUser.password;
     res.status(200).send({ token, user: foundUser });
    },

    
    getOne:async function(req,res){
        try {
            const users= await user.findFirst({ where: { id:req.user.userId } })
            console.log("helloqsqs",req.user.userId);
            res.status(200).send(users)    
        } catch (error) {
            throw error    
        }
    },
}