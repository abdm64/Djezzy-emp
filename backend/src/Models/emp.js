const mongoose = require('mongoose')

// define the schema for our study model
var studySchema = mongoose.Schema({
    deplome : { type: String, required : true},
    year : { type : Date, required: true},
    school : { type: String, required: true} 


},{ _id:false})
// define the schema for our project model
var projectSchema = mongoose.Schema({
    name : { type: String, required : true},
    typeProject : { type: String, required : true},
    yearStarted : { type : Date, required: true},
    yearFinished : { type : Date, required: true},
    Description : { type: String, required: false}, 
    links : [String] 


},{ _id:false})
// define the schema for our Experience model
var expSchema = mongoose.Schema({
    company : { type: String, required : true},
    role : { type: String, required : true},
    yearStarted : { type : Date, required: true},
    yearFinished : { type : Date, required: true},
    Description : { type: String, required: false}, 

},{ _id: false})

var formationSchema = mongoose.Schema({
    name : { type: String, required : true},
    type : { type: String, required : true},
    yearStarted : { type : Date, required: true},
    yearFinished : { type : Date, required: true},
    Description : { type: String, required: false}, 

},{ _id:false})

var postSchema = mongoose.Schema({
    post : { type: String, required : true},
    comment : { type: String, required : true},
    likes : { type: Number, required : true},
    time : { type : Date, required: true, default : Date.now()}
})
// define the schema for our user model
var empSchema = mongoose.Schema({
    
  employeeId : { type: Number, unique:true, required:true},
  email : { type: String, unique:true, required:true},
  phone : { type: Number, unique:true, required:true},
  firstName : { type: String, required:true},
  lastName : { type: String, required:true},
  position : { type: String, required:true},
  department : { type: String, required:true},
  location : { type: String, required:true},
  about : String,
  study : [studySchema],
  experiece: [expSchema],
  project : [projectSchema],
  formation: [formationSchema],
  profile_pic:String,
  posts: [ postSchema]
},{ _id:false, __v: false});



module.exports = mongoose.model('emp', empSchema);