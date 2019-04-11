import { socket } from './Socket';

export const Client = {

  receiveMessageOn(handleMessage){
    socket.on('RECEIVE_MESSAGE', handleMessage);
  },
  receiveMessageOff(handleMessage){
    socket.off('RECEIVE_MESSAGE', handleMessage);
  },
  sendMessageEmit(message){
    socket.emit('SEND_MESSAGE', {
      'message': message
    })
  }
}
