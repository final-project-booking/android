const router = require('express').Router();
const user=require('../controller/user.js');
// const securite=require('../midellware/midelware.js')
// const verifyUser=require('../midellware/VerifyUser.js')
// const securite=require('../midellware/VerifyUser.js')
// const verifyUser=require('../middelware/verifyUser.js')


router.post('/register',user.register)
router.post('/login',user.login)
router.get("/user",user.getOne)


module.exports = router;