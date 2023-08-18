const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');

const registerUser =asyncHandler( async(req, res) =>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error ('Faltan datos')
    }
    //verificar si el usuario existe
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error ('El email ya existe')
    } 
    //encriptar password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.hashedPassword

        })}
    else{
        res.status(400)
        throw new Error ('Datos invalidos')
    }
})

const loginUser =asyncHandler( async(req, res) =>{
    const {email, password} = req.body
    //verificar si el usuario existe
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id, user.name)
        })
    }else{
            res.status(400)
            throw new Error ('Datos invalidos')
        }
    res.json({message:"Login registred"})
})

//generamos token
const generateToken = (id, name) =>{
    return jwt.sign({id, name}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const getUserData =asyncHandler( async(req, res) =>{
    res.json({message:"Mis Datos de Usuario"})
})


module.exports = {
    registerUser,
    loginUser,
    getUserData
}