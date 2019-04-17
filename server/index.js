let io = require('socket.io')();

let users = [];
let messages = [];

let names = ['Simone', 'Monique', 'Thérèse', 'Mireille', 'Geneviève', 'Micheline', 'Huguette', 'Roseline', 'Paulette', 'Chantal', 'Gilbert', 'Alfred', 'Maurice', 'Robert', 'Yves', 'Gérard', 'Hubert', 'Eude', 'Michel', 'Claude', 'Jacques', 'Guy', 'Marcel', 'José'];
const randomName = names => names[Math.floor(Math.random() * names.length)];
const randomNumber = () => Math.ceil(Math.random() * 9);

io.sockets.on('connection', (socket) => {

  let user = {
    id: socket.id, 
    name: `${randomName(names)} - ${randomName(names)}_${randomNumber()}${randomNumber()}`
  };
  users = [...users, user]

  if (messages.length >= 500){
    messages.splice(0,1);
  };
  io.emit('HISTORY_MESSAGES', messages);

  //server send id connection and users array
  socket.emit('NEW_USER', user);
  socket.broadcast.emit('SYST_MSG', {
    statut:1, // connected
    user:user
  });
  console.log(user.name + ' connect');

  io.emit('NEW_CONNECTION', users);

  //when message arrive from client, server resend the message to all users
  socket.on('SEND_MESSAGE', (data) => {
    messages = [...messages, data];
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  });
  
  socket.on('disconnect', () => {

    users = users.filter(function(u) {
      return u.id !== user.id;
    });
      socket.broadcast.emit('SYST_MSG', {
        statut:0, // disconnected
        user:user
      });
      console.log(user.name + ' disconnect');

      io.emit('NEW_DISCONNECT', users);
      console.log(users)


  });

});


io.listen(8888);