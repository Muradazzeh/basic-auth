`use strict`
const express = require("express");
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users }  = require("../models/index");
const basicAuth=require("../Auth/basicAuth")
const signIn= express.Router();

signIn.post("/signin",basicAuth,handleSignIn)

 function handleSignIn (req,res){
     let result=req.data
    res.status(200).json({result:result,massage:"log In success"})
    
}

module.exports = signIn;