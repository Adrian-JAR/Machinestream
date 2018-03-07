import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _machines = [];

function setMachines(machines){
  _machines = machines;
}

class AppStoreClass extends EventEmitter {
  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

  getMachines(){
    return _machines;
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType){
    case AppConstants.RECIEVE_MACHINES:
      setMachines(action.machines);
      AppStore.emitChange();
      break

    default:
  }
});

export default AppStore;
