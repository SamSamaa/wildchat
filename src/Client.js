import { socket } from './Socket';

export const Client = {
    sendGoogleUser(newGoogleUser){
    socket.emit('SEND_NEW_GOOGLE_USER', newGoogleUser);
  },

  //method to listen new connection form server, data = id of my connection and users array (not working well)
  //method used in MyProfile to set the user id and in InputMsg to connect the right user to the right message in an
  // object via sendMessageEmit method below
  //method used in UserList component to set users array
  receivedNewUser(data) {
    socket.on('NEW_USER', data);
  },

  receiveSystMsg(data){
    socket.on('SYST_MSG', data);
  },
 
  receivedNewConnection(data) {
    socket.on('NEW_CONNECTION', data);
  },

  receiveDisconnection(data) {
    socket.on('NEW_DISCONNECT', data);
  },
  // method to listen received message (mine and others messsages) from server 
  // handleMessage is a functions parameter used in feed to add new message in messages array defined in feed component (messages = array of 
  // objects with user and message)
  // 2 methods used, On and Off, to don't open multiples socket.on every time there is changement (onChange, submit....)
  receiveMessageOn(handleMessage) {
    socket.on('RECEIVE_MESSAGE', handleMessage);
  },

  receiveMessageOff(handleMessage) {
    socket.off('RECEIVE_MESSAGE', handleMessage);
  },
  //method to emit message to server, used in feed component 

  sendDisconnection(user){
    socket.emit('SEND_DISCONNECTION', user);
  },

  sendMessageEmit(message, user, idTo, privateMessage) {
    socket.emit('SEND_MESSAGE', {
      message: message,
      user: {
        name: user.name,
        idUser: user.idUser,
        profilePic: user.profilePic
      },
      idTo: idTo,
      privateMessage: privateMessage
    });
  }
}
