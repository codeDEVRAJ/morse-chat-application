const path = require('path');
const rootDir = require('../utils/pathUtil');
exports.getLogin = (req , res , next)=>{
   res.sendFile(path.join(rootDir , 'views' , 'login.html'));
}
exports.PostLogin = (req, res , next) =>{
   console.log(req.body);
   res.sendFile(path.join(rootDir , 'views' , 'logedin.html'));
}