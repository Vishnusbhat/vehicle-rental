/* eslint-disable no-unused-vars */
const express = require ('express');
const cors = require('cors');
const authRoute = require('./routes/authenticationRoutes');
const passportSetup = require('./services/passportSetup');
const mongoose = require('mongoose');
const keys = require('./services/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');


const app = express();

app.use(express.json());

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('db connection successfull');
})
  
app.use('/auth',authRoute);

app.listen(3000,()=>{
    console.log("Listening requests from port 3000");
});