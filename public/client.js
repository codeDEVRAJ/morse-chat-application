// const { fromJSON } = require("postcss");

const socket = io('http://192.168.1.35:3003');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container'); // Fixed selector

form.addEventListener('submit' , (e)=>{
   e.preventDefault();
   const message = messageInput.value;
   append(`You : ${message} ` , 'right');
   socket.emit('send' , message);
   messageInput.value = ''
});
var audio = new Audio('/tone.mp3');
const append = (message, position) => {
   const messageElement = document.createElement('div');
   messageElement.innerText = message;
   messageElement.classList.add('message');
   messageElement.classList.add(position);
   messageContainer.append(messageElement);
   if (position == 'left'){
      audio.play()
   }
}


// 👇 Tab-specific name input
const Name = prompt("Enter your name to join"); 
if (Name){
socket.emit('new-user-joined', Name);
}
else {
   alert("you must enter the name to join the chat !");
   location.reload();
}

// 👇 Yeh theek karega ki pehle wale tab mein naye user ka naam aaye
socket.on('user-joined', data => {
   append(`${data} joined the chat`, 'right'); 
});

socket.on('recieve' , data=>{
   append(`${data.name}: ${data.message}`, 'left');
});
socket.on('left' , data=>{
   append(`${data} has left the chat ` , 'left');
});

