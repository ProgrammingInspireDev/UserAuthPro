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


router.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: 'Email and password are required'});
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({message: 'Invalid email or password'})
        }

        if(user.password !== password){
            return res.status(401).json({message: 'Invalid email or password'});
        }

        res.status(200).json({
            message: 'Login Successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch(error) {
        console.log('Login error', error.message);
        res.status(500).json({message: 'Server error'});
    }
})


export default router;