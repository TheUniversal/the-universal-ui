'use strict';

var hg = require('mercury');
var h = require('mercury').h;
var PlayPauseButton = require('./button/PlayPauseButton');
var ActionButton = require('./button/ActionButton');

function PlaybackControls() {
    return hg.state({
        playPauseButton: PlayPauseButton(),
        stopButton: ActionButton('stop', 'Stop'),
        previousButton: ActionButton('previous', 'Prev'),
        nextButton: ActionButton('next', 'Next')
    })
}

PlaybackControls.render = function (state) {
    return h('div.playback-controls', [
        PlayPauseButton.render(state.playPauseButton),
        ActionButton.render(state.stopButton),
        ActionButton.render(state.previousButton),
        ActionButton.render(state.nextButton)
    ])
};

module.exports = PlaybackControls;

