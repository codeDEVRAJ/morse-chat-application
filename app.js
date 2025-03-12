const express = require('express');

const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const chatController = require('./routes/chat-controller');
const ErrorHandler = require('./controllers/errorCtr');
const rootDir = require('./utils/pathUtil');
const path = require('path');

const app = express();

// Serve static files (CSS, images, JS, etc.)
app.use(express.static(path.join(rootDir, 'public')));

// Middleware to log requests
app.use((req, res, next) => {
   console.log(req.url, req.method);
   next();
});

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(userRouter);
app.use(hostRouter);
app.use(chatController);
// Handle errors (should be last)
app.use(ErrorHandler.getError);

const port = 3003;
app.listen(port, () => {
   console.log(`Server running on: http://localhost:${port}`);
});
