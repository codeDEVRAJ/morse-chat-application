const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');
hostRouter.get("/host/login",(req , res ,next)=>{
   res.sendFile(
path.join(rootDir, 'views' , 'login.html'));
});
hostRouter.post("/host/login" , (req, res , next)=>{
   console.log(req.body);
   res.sendFile(path.join(rootDir, 'views' , 'logedin.html'));
}
);
hostRouter.get("/home/contact.html" , (req, res , next) =>{
   res.sendFile(path.join(rootDir , 'home' , 'contact.html'));
});
hostRouter.post("/home/contact" , (req, res , next) =>{
console.log(req.body);
res.sendFile(path.join(rootDir , 'home' , 'contacted.html'));

});


hostRouter.get("/host/login" , (req , res , next)=>{
   res.sendFile(path.join(rootDir , 'views' , 'login.html'));
});
hostRouter.post("/host/login" , (req, res , next) =>{
   console.log(req.body);
   res.sendFile(path.join(rootDir , 'views' , 'logedin.html'));
});
hostRouter.get("/host/sign_up.html" , (req , res ,next)=>{
   console.log(req.body);
   res.sendFile(path.join(rootDir , 'views' , 'sign_up.html'));
});
hostRouter.post("/signup" , (req , res , next) =>{
   console.log(req.body);
   res.sendFile(path.join(rootDir , 'views' , 'signed_up.html'));
});

module.exports = hostRouter;