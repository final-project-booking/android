const router = require('express').Router();
const user=require('../controller/user.js');
const securite=require('../midellware/VerifyUser.js')
const verifyUser=require('../middelware/verifyUser.js')


router.post('/register',securite,user.register)
router.post('/login',user.login)
router.get("/user",verifyUser,user.getOne)


module.exports = router;