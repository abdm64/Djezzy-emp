const express = require('express')
const app = express()
const config = require('./config/config')
const mongoose = require('mongoose')
const userRoute = require('./src/Controllers/userController')
const empRoute = require('./src/Controllers/empController')
const bodyParser = require('body-parser')
const cors = require('cors');





app.use(cors()) 

app.use((req,res,next)=> {
  res.setHeader("Access-Control-Allow-Origin" ,"*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type , Accept"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET ,POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


mongoose.set('useFindAndModify', false)

mongoose
.connect(config.db.connectionUri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(() => {
  console.log( 'Connected to database!');
})
.catch(error => {
  console.log('Connection failed!');
  console.log(error);
});
app.use(bodyParser.json())

app.get('/api/v1',(req,res)=>{


    res.status(201).json({
      message : " DJEZZY-IN-EMP API is working",
    
    }); 
  
  })
  app.use(userRoute)
  app.use(empRoute)

  app.listen(config.app.port, ()  => {
    console.log('app listening on port ' + config.app.port);
});

