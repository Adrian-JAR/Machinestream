import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import MachinesAPI from '../utils/MachinesAPI';

export default {
  recieveMachines: () => {
    MachinesAPI
      .getMachines('https://machinestream.herokuapp.com/api/v1/machines/')
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
