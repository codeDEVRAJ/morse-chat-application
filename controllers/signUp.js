const path = require('path');
const rootDir = require('../utils/pathUtil');
exports.getSignup = (req , res ,next)=>{
   console.log(re.body);
   res.sendqFile(path.join(rootDir , 'views' , 'sign_up.html'));
};
exports.postSignedup =  (req , res , next) =>{
   console.log(req.body);
   res.sendFile(path.join(rootDir , 'views' , 'signed_up.html'));
};