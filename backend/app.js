/* eslint-disable no-unused-vars */
const express = require ('express');
const cors = require('cors');
const authRoute = require('./routes/authenticationRoutes');
const passportSetup = require('./services/passportSetup');
const mongoose = require('mongoose');
const keys = require('./services/keys');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('db connection successfull');
})
  
app.use('/login/auth',authRoute);

app.listen(3000,()=>{
    console.log("Listening requests from port 3000");
});