const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User=require('../models/userModel');
 

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
    
});

passport.use(new googleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken,refreshToken,profile,done)=>{

    User.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser){
            console.log('current user is:'+currentUser);
            done(null,currentUser)
        }
        else{
            new User({
                username:profile.displayName,
                googleId:profile.id
            }).save().then((newUser)=>{
                console.log('new user created'+newUser);
                done(null,newUser);
            })
        }
    })

    
}));