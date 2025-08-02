import express from 'express';
import User from '../models/User.js';


const router = express.Router();


router.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password ) {
            return res.status(400).json({message: 'All fields are required'});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(409).json({message: 'Email already registerd'});
        }

        const newUser = new User({name, email, password});

        await newUser.save();

        res.status(201).json({message: 'User registered successfully'});
    } catch(error) {
        console.log('Registration error', error.message);
        res.status(500).json({message: 'Server error'});
    }
})


export default router;