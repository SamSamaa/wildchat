import { socket } from './Socket';

export const Client = {

  receivedNewConnection(data) {
    socket.on('NEW_CONNECTION', data);
  },

  receiveMessageOn(handleMessage) {
    socket.on('RECEIVE_MESSAGE', handleMessage);
  },
  receiveMessageOff(handleMessage) {
    socket.off('RECEIVE_MESSAGE', handleMessage);
  },
  sendMessageEmit(message, name) {
    socket.emit('SEND_MESSAGE', {
      message: message,
      name: name
    })
  }
}




