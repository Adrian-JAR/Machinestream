import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import MachineListItem from './MachineListItem';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

function getMachineListItem(machine){
  return (
    <MachineListItem key={machine.id} machine={machine} />
  );
}

class Machines extends Component {
  constructor(props){
    super(props);
    this.state = {
      machines: []
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount(){
    AppActions.recieveMachines();
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this.onChange);
  }

  onChange(){
    this.setState({
      machines: AppStore.getMachines()
    }, function(){
      //console.log(this.state);
    });
  }

  render() {
    let machineListItems;
    if(this.state.machines){
      machineListItems = this.state.machines.map(machine => getMachineListItem(machine));
    }
    return (
      <div>
        <ListGroup>
          {machineListItems}
        </ListGroup>
      </div>
    );
  }
}

export default Machines;
