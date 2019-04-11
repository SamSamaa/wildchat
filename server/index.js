// Chargement de socket.io
let io = require('socket.io')();

io.sockets.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', (data) => {
    console.log(data)
    io.emit('RECEIVE_MESSAGE', data);
  })
});

io.listen(8888);