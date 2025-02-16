const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');
const loginController = require('../controllers/login');
const homesController = require('../controllers/homes');
const signController = require('../controllers/signUp');
const { sign } = require('crypto');


hostRouter.get("/home/contact.html" , homesController.getContact);
hostRouter.post("/home/contact" , homesController.PostContacted);
hostRouter.get("/host/login" , loginController.getLogin );
hostRouter.post("/host/login" , loginController.PostLogin );
hostRouter.get("/host/sign_up.html" , signController.getSignup);
hostRouter.post("/signup" ,signController.postSignedup);

module.exports = hostRouter;