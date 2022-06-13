`use strict`
module.exports=(req,res,next)=>{
    res.status(404).send({
        code:404,
        path:req.path,
        massage:"Please Try again, This page is not found "
    })
}