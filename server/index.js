let io = require('socket.io')();

let users = [];
let messages = [];
let history = [];

io.sockets.on('connection', (socket) => {

  let user = {
    id: socket.id,
    name : ''
  }
  history = messages
  while (history.length > 5){
    history.splice(0,1);
  };

  socket.on('SEND_NEW_GOOGLE_USER', (newGoogleUser) => {
    user = {
      id: socket.id,
      name : newGoogleUser.username,
      profilPic : newGoogleUser.profilPic
    }
    users = [...users, user];

    socket.emit('NEW_USER', {user, history});
    io.emit('NEW_CONNECTION', users);
  });

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    messages = [...messages, data];
    
    // Ajout de la date
    data.date = new Date();
    io.emit('RECEIVE_MESSAGE', data);
  });

  socket.on('disconnect', () => {

    users = users.filter(function (u) {
      return u.id !== user.id;
    });

    io.emit('NEW_DISCONNECT', {users, user} );
  });
  socket.on('SEND_DISCONNECTION', (user) => {
    users = users.filter(function (u) {
      return u.id !== user;
    });
    io.emit('NEW_DISCONNECT', {users, user} );
  });
});

io.listen(8888);