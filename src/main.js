'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;
var PlayPauseButton = require('./components/button/PlayPauseButton');
var ActionButton = require('./components/button/ActionButton');

function App() {
    return hg.state({
        title: hg.value('Hi, this is The Universal!'),
        playPauseButton: PlayPauseButton(),
        stopButton: ActionButton('stop', 'Stop'),
        previousButton: ActionButton('previous', 'Prev'),
        nextButton: ActionButton('next', 'Next')
    });
}

App.render = function render(state) {
    return h('div', [
        h('h1', state.title),
        PlayPauseButton.render(state.playPauseButton),
        ActionButton.render(state.stopButton),
        ActionButton.render(state.previousButton),
        ActionButton.render(state.nextButton)
    ])
};

hg.app(document.body, App(), App.render);
