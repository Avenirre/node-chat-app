let socket = io();

socket.on('connect', function(){
  console.log('Connected to the server');

  socket.emit('createMessage', {
    from: 'TestClient',
    text: 'Test answer!'
  })
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(newMessage){
  console.log('New message!', newMessage);
});
