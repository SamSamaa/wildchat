// Chargement de socket.io
let io = require('socket.io')();
let users = [];

io.sockets.on('connection', (socket) => {
  console.log(socket.id);
  users = [...users, socket.id]

  socket.emit('NEW_CONNECTION', { id: socket.id, users: users });

  socket.on('SEND_MESSAGE', (data) => {
    console.log(data)
    io.emit('RECEIVE_MESSAGE', data);
  })
});

io.listen(8888);