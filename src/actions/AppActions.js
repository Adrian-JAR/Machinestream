import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import MachinesAPI from '../utils/MachinesAPI';
import {Socket} from 'phoenix';

// Open Socket connection
const socket = new Socket('ws://machinestream.herokuapp.com/api/v1/machines')
socket.connect()

// Join correct channel and log events
const channel = socket.channel("events", {}) 
channel.join()
channel.on('new', event => console.log(event))

export default {
  recieveMachines: () => {
    MachinesAPI
      .getMachines(socket)
      .then(machines => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_MACHINES,
          machines: machines
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_MACHINES_ERROR,
          message: message
        });
      });
  }
}
