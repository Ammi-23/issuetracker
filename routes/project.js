const express= require('express');
const router= express.Router();
const projectController= require('../controllers/project_controller');
//to get to the project detail page by id
router.get('/:id',projectController.project);
//to get to the issue form page when create issue button is clicked
router.get('/issue-form/:id', projectController.issueForm);
//to post the new issue for the project
router.post('/create-issue/:id', projectController.createIssue);

module.exports= router;