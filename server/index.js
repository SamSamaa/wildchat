let io = require('socket.io')();

let users = [];

let names = ['Gilbert', 'Alfred', 'Maurice', 'Robert', 'Yves', 'Gérard', 'Hubert', 'Eude', 'Michel', 'Claude', 'Jacques', 'Guy', 'Marcel', 'José'];
const randomName = names => names[Math.floor(Math.random() * names.length)];
const randomNumber = () => Math.ceil(Math.random() * 9);

io.sockets.on('connection', (socket) => {

  let user = {
    id: socket.id, 
    name: `${randomName(names)}_${randomNumber()}${randomNumber()}`
  };

  users = [...users, user]
  console.log(users);

  //server send id connection and users array
  socket.emit('NEW_USER', user);
  io.emit('NEW_CONNECTION', users);

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });
  
  socket.on('disconnect', () => {
    console.log(user.name + ' disconnect');

    users = users.filter(function(u) {
      return u.id !== user.id;
    });

      io.emit('NEW_DISCONNECT', users);
      console.log(users)


  });

});


io.listen(8888);