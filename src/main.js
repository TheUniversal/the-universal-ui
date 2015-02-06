'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;
var PlayPauseButton = require('./components/button/PlayPauseButton');
var SingleActionButton = require('./components/button/SingleActionButton');
var io = require('socket.io-client');
var socket = io('http://127.0.0.1:3000');

function App() {
    return hg.state({
        title: hg.value('Hi, this is The Universal!'),
        playPauseButton: PlayPauseButton(socket),
        stopButton: SingleActionButton('stop', 'Stop', socket),
        previousButton: SingleActionButton('previous', 'Prev', socket),
        nextButton: SingleActionButton('next', 'Next', socket)
    });
}

App.render = function render(state) {
    return h('div', [
        h('h1', state.title),
        PlayPauseButton.render(state.playPauseButton),
        SingleActionButton.render(state.stopButton),
        SingleActionButton.render(state.previousButton),
        SingleActionButton.render(state.nextButton)
    ])
};

hg.app(document.body, App(), App.render);
