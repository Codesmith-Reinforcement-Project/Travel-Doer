const express = require('express');
const userController = require("../controllers/userController") ;

const router = express.Router();

router.post(
    "/login",
    userController.login,
    (req, res) => {} 
)

router.post('/signup',
    userController.checkForExisting,
    userController.hashPassword,
    userController.addNewAccount,
    (req, res) => {
        res.status(200).json('something went wrong...')
    }
)

module.exports = router