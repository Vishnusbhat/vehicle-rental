const router= require('express').Router();

const authcheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/');
    }
    next();
}

router.get('/', authcheck, (req,res)=>{
    res.send('We have user logged in and username is: ' + req.user.username);
});

module.exports=router;