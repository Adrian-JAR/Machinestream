import {Socket} from 'phoenix'

// Open Socket connection
const socket = new Socket('ws://machinestream.herokuapp.com/api/v1/events')
socket.connect()

// Join correct channel and log events
const channel = socket.channel("events", {}) 
channel.join()
channel.on('new', event => console.log(event))
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
