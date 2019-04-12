// Chargement de socket.io
let io = require('socket.io')();
let users = [];

io.sockets.on('connection', (socket) => {
  users = [...users, socket.id]
  console.log(users);

  socket.emit('NEW_CONNECTION', { id: socket.id, users: users });

  socket.on('SEND_MESSAGE', (data) => {
    console.log(data)
    io.emit('RECEIVE_MESSAGE', data);
  });
  
  socket.on('disconnect', () => {
    console.log(socket.id + ' disconnect');
    users = users.filter(function(user) {
      return user !== socket.id;
    });

    socket.emit('NEW_DISCONNECT', { id: socket.id, users: users });
    
    console.log(users)
  });

});


io.listen(8888);