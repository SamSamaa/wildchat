let io = require('socket.io')();

let users = [];
let messages = [];
let history = [];

let names = ['Gilbert', 'Marmoude', 'Sasuke', 'Robert', 'Yves', 'Kévin', 'Hubert', 'Eude', 'Boubakar', 'Claude', 'Jacques', 'Guy', 'Julio', 'José'];
const randomName = names => names[Math.floor(Math.random() * names.length)];
const randomNumber = () => Math.ceil(Math.random() * 9);

io.sockets.on('connection', (socket) => {

  let user = {
    id: socket.id,
    name: `${randomName(names)}_${randomNumber()}${randomNumber()}`
  };
  users = [...users, user]

  history = messages
  while (history.length > 5) {
    history.splice(0, 1);
  };

  //server send id connection and users array
  socket.emit('NEW_USER', { user, history });
  io.emit('NEW_CONNECTION', users);

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    const message = data;
    if (message.privateMessage === true) {
      console.log(data);
      io.to(data.idTo).emit('RECEIVE_MESSAGE', data);
      io.to(data.idEmet).emit('RECEIVE_MESSAGE', data);
    } else {
      messages = [...messages, data];

      // Ajout de la date
      data.date = new Date();
      io.emit('RECEIVE_MESSAGE', data);
    }
  });

  socket.on('disconnect', () => {
    users = users.filter(function (u) {
      return u.id !== user.id;
    });

    io.emit('NEW_DISCONNECT', users);
  });

});

io.listen(8888);