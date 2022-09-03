const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authUser, authUserRole } = require('../controllers/basicAuth');


router.get('/admin',authUser(),authUserRole(['admin']),adminController.adminDash);
router.get('/admin/userlist',authUser(),authUserRole(['admin']),adminController.userList);
router.get('/admin/adduser',authUser(),authUserRole(['admin']),adminController.adduserform);
router.post('/admin/adduser',authUser(),authUserRole(['admin']),adminController.adduser);
router.get('/admin/updateuser/:id',authUser(),authUserRole(['admin']),adminController.updateuserform);
router.post('/admin/updateuser/:id',authUser(),authUserRole(['admin']),adminController.updateuser);
router.get('/admin/deleteuser/:id',authUser(),authUserRole(['admin']),adminController.deleteuser);
router.get('/admin/viewuser/:id',authUser(),authUserRole(['admin']),adminController.viewuser);


router.get('/admin/templatelist',authUser(),authUserRole(['admin']),adminController.templatelist);
router.post('/admin/addtemplate',authUser(),authUserRole(['admin']),adminController.addtemplate);
router.get('/admin/addtemplate',authUser(),authUserRole(['admin']),adminController.addtemplatedisplay);
router.post('/admin/addskills',authUser(),authUserRole(['admin']),adminController.addskills);







module.exports = router;