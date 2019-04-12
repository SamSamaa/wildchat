let io = require('socket.io')();

let users = [];

io.sockets.on('connection', (socket) => {
  users = [...users, socket.id]
  console.log(users);

  //server send id connection and users array
  socket.emit('NEW_USER', { id: socket.id, users: users });
  io.emit('NEW_CONNECTION', { id: socket.id, users: users });

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });
  
  socket.on('disconnect', () => {
    console.log(socket.id + ' disconnect');
    users = users.filter(function(user) {
      return user !== socket.id;
    });

      io.emit('NEW_DISCONNECT', { id: socket.id, users: users });
    
      console.log(users)


  });

});


io.listen(8888);