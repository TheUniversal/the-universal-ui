'use strict';

let hg = require('mercury');
let h = require('mercury').h;
var Commands = require('the-universal-common/command/Commands');
let PlayPauseButton = require('./button/PlayPauseButton');
let ActionButton = require('./button/ActionButton');

function PlaybackControls() {
    return hg.state({
        playPauseButton: PlayPauseButton(),
        stopButton: ActionButton.playbackButton(Commands.PLAYBACK.STOP, 'Stop'),
        previousButton: ActionButton.playbackButton(Commands.PLAYBACK.PREVIOUS, 'Prev'),
        nextButton: ActionButton.playbackButton(Commands.PLAYBACK.NEXT, 'Next')
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

