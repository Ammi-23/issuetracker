const Project= require('../models/create_project');
const db= require('../config/mongoose');

//to render the home page
module.exports.home= async function(req,res){
    const projects= await Project.find({}).sort('createdAt');
    return res.render('home',
                {title:'home page',
                projects});
}
//to render the create project form page
module.exports.createProject= async function(req,res){
      return res.render('createProject',{title: "Create Project"});
}

//create the project and display
module.exports.project=async function(req,res){
    Project.create({
         name:req.body.name,
         description: req.body.description,
         author: req.body.author
        })
        .then((newProject) => {
            console.log(newProject);
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('error in creating a project');
            return;
        });
            
}
