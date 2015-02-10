'use strict';

var io = require('socket.io-client');
var socket = io('http://127.0.0.1:3000');

module.exports = socket;
