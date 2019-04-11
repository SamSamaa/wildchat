import { socket } from './Socket';

export const Client = {

  receivedNewConnection(data) {
    socket.on('NEW_CONNECTION', data);
  }
  
}

