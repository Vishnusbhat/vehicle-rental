/* eslint-disable no-unused-vars */
const express = require ('express');
const authRoute = require('./routes/authenticationRoutes');
const passportSetup = require('./services/passportSetup');
const mongoose = require('mongoose');
const keys = require('./services/keys');

const app = express();

mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('db connection successfull');
})
  


app.use('/login',authRoute);

app.listen(3000,()=>{
    console.log("Listening requests from port 3000");
});