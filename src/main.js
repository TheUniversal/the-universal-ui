'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;
var PlayPauseButton = require('./components/button/PlayPauseButton');
var io = require('socket.io-client');
var socket = io('http://127.0.0.1:3000');

socket.on('playback', function (command) {
    console.log(command);
});

function App() {
    return hg.state({
        title: hg.value('Hi, this is The Universal!'),
        playPauseButton: PlayPauseButton(socket)
    });
}

App.render = function render(state) {
    return h('div', [h('h1', state.title), PlayPauseButton.render(state.playPauseButton)])
};

hg.app(document.body, App(), App.render);
