const socket = io("https://morse-chat-application.onrender.com/", { transports: ["websocket"] });

 // Automatically uses the correct backend URL

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container'); 

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const message = messageInput.value;
   console.log("Sending message:", message); // Debug log
   append(`You: ${message}`, 'right');
   socket.emit('send', message);
   messageInput.value = '';
});

var audio = new Audio('/tone.mp3');

const append = (message, position) => {
   const messageElement = document.createElement('div');
   messageElement.innerText = message;
   messageElement.classList.add('message', position);
   messageContainer.append(messageElement);

   if (position === 'left') {
      audio.play();
   }
};

const Name = prompt("Enter your name to join");
if (Name) {
   socket.emit('new-user-joined', Name);
} else {
   alert("You must enter your name to join the chat!");
   location.reload();
}

socket.on('user-joined', data => {
   append(`${data} joined the chat`, 'right'); 
});

socket.on('receive', data => {  
    console.log("Received message:", data);  // Debug log
    append(`${data.name}: ${data.message}`, 'left');
});


socket.on('left', data => {
   append(`${data} has left the chat`, 'left');
});
