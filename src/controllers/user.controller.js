import User from "../models/user.model";
import express from "express";
const router = express().router;

router.post("/newuser", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: "Name should not empty..." });
    }

    if (!email) {
      return res.status(400).json({ message: "Email should not empty..." });
    }

    if (!password) {
      return res.status(400).json({ message: "Password should not empty..." });
    }

   const NewUser = await User.create({name, email, password});
   NewUser.save();

   return res.status(201).json({message: 'User successfully created!'})
    
  } catch (err) {
    next(err);
  }
});

router.get('/newuser', async (req, res) => {
    const {email, password} = req.body; 
   
    try{
        if (!email) {
            return res.status(400).json({ message: "Email should not empty..." });
          }
      
        if (!password) {
            return res.status(400).json({ message: "Password should not empty..." });
        }

        const findUser = await User.findOne({email});

        if(!findUser){
            return res.status(400).json({message: "User not found"});
        }

        return res.status(200).json({message: `user exist with ${findUser}`})


    }catch(err){
        next(err);
    }
    
})

export default router; 