const express = require('express');
const rootDir = require('../utils/pathUtil');
const path = require('path');
const userRouter = express.Router();
userRouter.get("/" ,(req, res , next) =>{
   res.sendFile(path.join(rootDir, 'views' , 'home.html'));
});
userRouter.get("/home/features.html", (req, res, next) => {
   res.sendFile(path.join(rootDir, "home", "features.html"));
});
userRouter.get("/home/about.html",(req , res , next) =>{
   res.sendFile(path.join(rootDir , "home" , "about.html"));
});


module.exports = userRouter;