const express = require('express');
const rootDir = require('../utils/pathUtil');
const path = require('path');
const userRouter = express.Router();
const homesController =require('../controllers/homes');
userRouter.get("/" ,homesController.getHome);
userRouter.get("/home/features.html", homesController.getFeatures );
userRouter.get("/home/about.html", homesController.getAbout);
userRouter.get("/home/learn-morse.html" , homesController.getMorse);


module.exports = userRouter;