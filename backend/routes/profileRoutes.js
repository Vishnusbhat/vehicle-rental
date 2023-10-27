const router= require('express').Router();
const passport=require('passport');

const authcheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/google');
    }
    next();
}

router.get('/',authcheck, (req,res)=>{
    res.send('this is your profile'+ req.user.username )
});




module.exports=router;