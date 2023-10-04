const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys')

passport.use(new googleStrategy({
    callbackURL:'/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
  }, (axccessToken,refreshToken,profile,done)=>{
    
}));