const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const chatController = require('./routes/chat-controller');

const ErrorHandler = require('./controllers/errorCtr');
const rootDir = require('./utils/pathUtil');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "https://morse-chat-application-8.onrender.com",  // Allow your frontend
        methods: ["GET", "POST"]
    }
});



const users = {};

// Socket.io handling
io.on('connection', (socket) => {
  

    socket.on('new-user-joined', (name) => {
      console.log('user joined :' , name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
        console.log('A user connected' , name);
    });
   
socket.on('send', (message) => {
    if (!users[socket.id]) return;  // Prevent sending from undefined users
    console.log(`Message received from ${users[socket.id]}:`, message);
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
});

    socket.on('disconnect', () => {
    socket.broadcast.emit('left', users[socket.id]); // Notify others
    delete users[socket.id]; // Remove user
});

});

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

const PORT = process.env.PORT || 4003; 
server.listen(PORT, () => {
    console.log(`Server running on: https://morse-chat-application-9.onrender.com`);
});
