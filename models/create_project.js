const mongoose= require('mongoose');

//create a schema for project
const projectSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    issues:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue"
        }
    ],
    labels:[
        {
            type: String
        }
    ]
});

const Project= mongoose.model('project',projectSchema);
module.exports = Project;