const express = require('express');

const userRouter = require("./routes/userRouter");

const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const path = require('path');

const app = express();

app.use(express.static(path.join(rootDir , 'public')));

app.use ((req, res , next)=>{
   console.log(req.url , req.method);
   next();
}
);
app.use (express.urlencoded());
app.use(userRouter);
app.use(hostRouter);



app.use((req ,res , next) =>{
   res.status(404).sendFile(path.join(rootDir, 'views' , '404.html'));
});

const port = 3001;
app.listen(port , () =>{
   console.log(`server running on address : http://localhost:${port}`);
});