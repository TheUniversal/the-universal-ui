'use strict';

let hg = require('mercury');
let h = require('mercury').h;
let PlaybackCommands = require('the-universal-common/command/Commands').PLAYBACK;
let PlaybackStatus = require('the-universal-common/playback/PlaybackStatus');
let socket = require('../../services/Socket');

function PlayPauseButton() {
    let state = hg.state({
        action: hg.value(PlaybackCommands.PLAY),
        playing: hg.value(false),
        channels: {
            playOrPause: (state) => {
                socket.emit('playback', state.playing() ? PlaybackCommands.PAUSE : PlaybackCommands.PLAY);
            }
        }
    });

    socket.on('playback', function (playbackStatus) {
        console.log(playbackStatus);
        let playing = playbackStatus === PlaybackStatus.PLAYING;
        state.playing.set(playing);
        state.action.set(playing ? PlaybackCommands.PAUSE : PlaybackCommands.PLAY);
    });

    return state
}

PlayPauseButton.render = function(state) {
    return h('button', {
      'ev-click': hg.send(state.channels.playOrPause)
    }, state.action)
};

module.exports = PlayPauseButton;
