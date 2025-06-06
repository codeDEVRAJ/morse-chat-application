const path = require('path');
const rootDir = require('../utils/pathUtil');
exports.getHome = (req, res , next) =>{
   res.sendFile(path.join(rootDir, 'views' , 'home.html'));
};
exports.getFeatures = (req, res, next) => {
   res.sendFile(path.join(rootDir, "home", "features.html"));
}
exports.getAbout = (req , res , next) =>{
   res.sendFile(path.join(rootDir , "home" , "about.html"));
}
exports.getContact =  (req, res , next) =>{
   res.sendFile(path.join(rootDir , 'home' , 'contact.html'));
}
exports.PostContacted =(req, res , next) =>{
console.log(req.body);
res.sendFile(path.join(rootDir , 'home' , 'contacted.html'));
}
exports.getMorse = (req, res , next)=>{
   res.sendFile(path.join(rootDir , 'home' , 'learn-morse.html'));
}
exports.getTranslate = (req , res, next)=>{
   const fp = path.join(rootDir , 'home' , 'trnst.html');
   res.sendFile(fp);
};