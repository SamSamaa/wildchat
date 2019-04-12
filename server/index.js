let io = require('socket.io')();

let users = [];

io.sockets.on('connection', (socket) => {
  console.log(socket.id);
  //after connection, new user is added to users array
  users = [...users, socket.id];

  //server send id connection and users array
  socket.emit('NEW_CONNECTION', { id: socket.id, users: users });

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });
});

io.listen(8888);