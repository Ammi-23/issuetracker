const Project= require('../models/create_project');
const db= require('../config/mongoose');
const Issue= require('../models/create_issue');

//to render the project detail page by id
module.exports.project= async function(req,res){
    let project= await Project.findById(req.params.id).populate({
        path: "issues",
    });
    return res.render('projectDetail',{title:'Project Detail',project});
} 

//to render the issue form for project id
module.exports.issueForm= async function(req,res){
    let project = await Project.findById(req.params.id);
    return res.render('issueForm', {title: 'Issue Form', project})
}

//create a issue
module.exports.createIssue = async function(req,res){
    let project = await Project.findById(req.params.id);
    if (project) {
        let issue = await Issue.create({
          title: req.body.title,
          description: req.body.description,
          labels: req.body.labels,
          author: req.body.author,
        });
        project.issues.push(issue); //to add the new issue in project.issues
        if (!(typeof req.body.labels === 'string')) {
            for (let label of req.body.labels) {
              let isPresent = project.labels.find((obj) => obj == label);
              if (!isPresent) { 
                project.labels.push(label);
              }
            }
        } else{
            let isPresent = project.labels.find((obj) => obj == req.body.labels);
            if (!isPresent) {
                project.labels.push(req.body.labels);
            }
        }
        await project.save();
        return res.redirect('back');
    }
    return res.redirect('back');
}
