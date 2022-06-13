`use strict`
require("dotenv").config();
const express=require("express")
const app = express()

const notFoundHandler=require("./errorHandler/404")
const serverError=require("./errorHandler/500")
const signUpHandler=require("./Routes/signUp")
const signInHandler=require("./Routes/signIn")
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(signUpHandler)
app.use(signInHandler)

app.use("*",notFoundHandler)
app.use(serverError)

function start (port){
    app.listen(port, ()=>{
        console.log(`Extraordinary Things Happen on this port ${port}`);
    })
}
module.exports={
    app:app,
    start:start,
}