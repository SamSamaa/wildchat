let io = require('socket.io')();

let users = [];
let messages = [];
let history = [];

let names = ['Gilbert', 'Marmoude', 'Sasuke', 'Robert', 'Yves', 'Gérard', 'Hubert', 'Eude', 'Boubakar', 'Claude', 'Jacques', 'Guy', 'Marcel', 'José'];
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

  console.log(history);

  //server send id connection and users array
  socket.emit('NEW_USER', { user, history });
  io.emit('NEW_CONNECTION', users);

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    messages = [...messages, data];

    // Ajout de la date
    data.date = new Date();
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });

  //PrivateMsg
  socket.on('SEND_PRIVATE_MESSAGE', (data) => {
    console.log(data);
    io.to(data.id).emit('PRIVATE_MESSAGE', data.message);
  })

  socket.on('disconnect', () => {
    console.log(user.name + ' disconnect');

    users = users.filter(function (u) {
      return u.id !== user.id;
    });

    io.emit('NEW_DISCONNECT', users);
    console.log(users)
  });

});

io.listen(8888);