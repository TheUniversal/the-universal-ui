'use strict';

var hg = require('mercury');
var h = require('mercury').h;

function PlayPauseButton(socket) {
    return hg.state({
        action: hg.value('Play'),
        playing: hg.value(false),
        channels: {
            playOrPause: (state) => {
                state.playing.set(!state.playing());
                state.action.set(state.playing() ? 'Pause' : 'Play');
                socket.emit('playback', state.playing() ? 'pause' : 'play');
            }
        }
    })
}

PlayPauseButton.render = function(state) {
    var channels = state.channels;

    return h('button', {
      'ev-click': hg.send(channels.playOrPause)
    }, state.action)
};

module.exports = PlayPauseButton;