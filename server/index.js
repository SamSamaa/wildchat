let io = require('socket.io')();

let users = [];

io.sockets.on('connection', (socket) => {
  console.log(socket.id);
  users = [...users, socket.id]

  socket.emit('NEW_CONNECTION', { id: socket.id, users: users });

});

io.listen(8888);