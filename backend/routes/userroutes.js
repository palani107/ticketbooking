const express = require('express')
const userController =require('../controlers/usercontroler')

const router = express.Router();

router.get('/get', userController.getAllUser);
router.post('/add',userController.addUser);

module.exports = router;