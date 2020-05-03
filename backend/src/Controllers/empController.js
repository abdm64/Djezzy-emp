const mongoose = require('mongoose')
const express =require('express');
const app = express.Router();
require('../Models/emp')
const Emp = mongoose.model('emp')


// add emp to database 

app.post('/api/v1/emp', (req,res) => {
    const emp = new Emp(req.body)

    //console.log(emp)
    emp.save().then(result =>{

        res.status(201).json({
            message : "Operation succeeded",
            result: result
      
          });
      
        
    }).catch(err => {
        console.log(err)

        res.status(500).json({
            message : "Operation failed",
            error : err
      
      
          });


    })


})

//get emp by ID 
app.get("/api/v1/emp/:email", (req,res)=> {

   const email = req.params.email

   Emp.findOne( {email : email}, {_id: 0,__v:0} ).then((docs)=> {

        if (!docs){
               
               res.status(404).json({
                 message : "no user with  "+ email,
           
                 
               }) } 
               else {
     
                 res.status(200).json({
                   message : "Done",
                   result : docs
                   
                 })
     
                 
               };
     
     
         }).catch((err)=>{
             console.log(err)
           res.status(404).json({
             message : "err",
             error : err
       
             
           })
     
         })
     
      
})

// update epm -info 


app.put("/api/v1/emp/:email", (req,res)=> {
    const email = req.params.email

    Emp.findOneAndUpdate( {email : email} , req.body , {new: true} ,
 
        
        (err, docs) => {
            if (!docs){
              
              res.status(404).json({
                message : "no user with  " + email
       
                
              }) ;
      
            } else  if (err ){

                res.status(500).json(err)
                console.log(err)

                  }else {
      
                    res.status(200).json({
                      message : "operation Done",
                      result: docs
                    }) ;
                  }
              }




    )







})//end of put 

module.exports = app;
