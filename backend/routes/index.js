var express = require('express');
const LoginController = require('../Controller/LoginController');
var router = express.Router();

/* GET home page. */
router.post("/login",LoginController.Login)

module.exports = router;
