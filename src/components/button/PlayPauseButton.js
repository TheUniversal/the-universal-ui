'use strict';

var hg = require('mercury');
var h = require('mercury').h;

function PlayPauseButton(socket) {
    var state = hg.state({
        action: hg.value('Play'),
        playing: hg.value(false),
        channels: {
            playOrPause: (state) => {
                socket.emit('playback', state.playing() ? 'pause' : 'play');
            }
        }
    });

    socket.on('playback', function (command) {
        console.log(command);
        let playing = command === 'play';
        state.playing.set(playing);
        state.action.set(playing ? 'Pause' : 'Play');
    });

    return state
}

PlayPauseButton.render = function(state) {
    return h('button', {
      'ev-click': hg.send(state.channels.playOrPause)
    }, state.action)
};

module.exports = PlayPauseButton;