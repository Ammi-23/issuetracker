const express= require('express');
const router= express.Router();
const homeController= require('../controllers/home_controller');

//to get to the home page
router.get('/home',homeController.home);
// to get to the create project form page
router.get('/create-Project', homeController.createProject);
// to post the new project
router.post('/project', homeController.project);
//for project detail page
router.use('/projectDetail', require('./project'))

module.exports= router;