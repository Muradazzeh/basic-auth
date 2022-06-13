`use strict`
const express = require("express");
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users }  = require("../models/index");
async function basicAuth(req, res, next) {
 
    if (req.headers.authorization) {
        
        let basicHeaderParts = req.headers.authorization.split(" ");

        let encoded = basicHeaderParts[1];
       

        let decoded = base64.decode(encoded);
        
        let username = decoded.split(":")[0];
        let password = decoded.split(":")[1];

        
        try {
            const user = await Users.findOne({ where: { username: username } });
            req.data=user 
            const valid = await bcrypt.compare(password, user.password);
            if (valid) {
               next();
           
                
            } else {
                res.status(500).send("wrong username or password");
            }
        } catch {
            res.status(500).send("app error");
        }
    }

}

module.exports = basicAuth;