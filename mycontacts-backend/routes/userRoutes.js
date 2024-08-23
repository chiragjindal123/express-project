const express = require('express');
const { resgisteruser, loginuser, currentuser } = require('../controllers/userController');
const router = express.Router();


// router.post('/register',resgisteruser);

// or

router.route('/register').post(resgisteruser);

router.post('/login', loginuser);

router.get('/current', currentuser);

module.exports = router;