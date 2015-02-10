'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;
var PlayPauseButton = require('./components/button/PlayPauseButton');
var SingleActionButton = require('./components/button/SingleActionButton');

function App() {
    return hg.state({
        title: hg.value('Hi, this is The Universal!'),
        playPauseButton: PlayPauseButton(),
        stopButton: SingleActionButton('stop', 'Stop'),
        previousButton: SingleActionButton('previous', 'Prev'),
        nextButton: SingleActionButton('next', 'Next')
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
