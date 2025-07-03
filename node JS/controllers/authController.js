const User = require('../models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async(req,res)=> {
  try{
    const {username,email,password, role} = req.body;
    const checkExistingUser = await User.findOne({$or : [{email}, {username}]});
    console.log(checkExistingUser);
    if(checkExistingUser){
      return res.status(400).json({message : "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password : hashedPassword,
      role: role || 'user'
    })
    await user.save();
    return res.status(201).json({ 
    message: 'User registered successfully',
    user: user.username,
    mail: user.email
    });
  }
  catch(e) {
    console.log(e);
  }
}

const loginUser = async(req,res)=> {
  try{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
      return res.status(400).json({message : "User not found, please register"});
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword){
      return res.status(400).json({message : "Invalid password"});
    }
    const accessToken = jwt.sign({
    userId: user._id,
    username: user.username,
    role: user.role
    }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15m'
    })
    return res.status(200).json({
      message : "User logged in successfully",
      username: user.username,
      role: user.role,
      accessToken
    });
  }
  catch(e) {
    console.log(e);
  }
}

module.exports = {registerUser,loginUser};