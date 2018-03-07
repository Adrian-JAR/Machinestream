import React, { Component } from 'react';
import {Well, ListGroup, ListGroupItem} from 'react-bootstrap';

class MachineListItem extends Component {
  render() {
    const {machine} = this.props;
    return (
      <Well>
        <h4>{machine.machine_type}</h4>
        <ListGroup>
          <ListGroupItem>status: {machine.status}</ListGroupItem>
          <ListGroupItem>longitude: {machine.longitude}</ListGroupItem>
          <ListGroupItem>latitude: {machine.latitude}</ListGroupItem>
          <ListGroupItem>last_maintenance: {machine.last_maintenance}</ListGroupItem>
          <ListGroupItem>install_date: {machine.install_date}</ListGroupItem>
          <ListGroupItem>floor: {machine.floor}</ListGroupItem>
          
        </ListGroup>
      </Well>
    );
  }
}

export default MachineListItem;
