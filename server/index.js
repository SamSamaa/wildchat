let io = require('socket.io')();

let users = [];
let messages = [];
let history = [];

io.sockets.on('connection', (socket) => {

  let user = {
    idUser: socket.id,
    name: ''
  };

  history = messages;

  while (history.length > 500) {
    history.splice(0, 1);
  }

  socket.on('SEND_NEW_GOOGLE_USER', (newGoogleUser) => {
    user = {
      idUser: socket.id,
      name: newGoogleUser.username,
      profilePic: newGoogleUser.profilePic
    };

    users = [...users, user];

    //server send id connection and users array
    socket.emit('NEW_USER', { user, history });

    socket.broadcast.emit('SYST_MSG', {
      statut: 1, // connected
      user: user
    });

    io.emit('NEW_CONNECTION', {users, user});
  });

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    console.log(data);

    const message = data;

    if (message.privateMessage === true) {
      io.to(data.idTo).emit('RECEIVE_MESSAGE', data);
      io.to(data.user.idUser).emit('RECEIVE_MESSAGE', data);
    } else {
      messages = [...messages, data];

      // Ajout de la date
      data.date = new Date();
      io.emit('RECEIVE_MESSAGE', data);
    }
  });

  socket.on('disconnect', () => {
    users = users.filter(function (u) {
      return u.idUser !== user.idUser;
    });

    socket.broadcast.emit('SYST_MSG', {
      statut: 0, // disconnected
      user: user
    });

    io.emit('NEW_DISCONNECT', { users, user });
  });

  socket.on('SEND_DISCONNECTION', (user) => {
    users = users.filter(function (u) {
      return u.idUser !== user.idUser;
    });
    
    socket.broadcast.emit('SYST_MSG', {
      statut: 0, // disconnected
      user: user
    });
    
    io.emit('NEW_DISCONNECT', { users, user });
  });
});

io.listen(8888);