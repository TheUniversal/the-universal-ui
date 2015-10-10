'use strict';

let hg = require('mercury');
let h = require('mercury').h;
let socket = require('../../services/Socket');

function ActionButton(channel, action, displayValue) {
    return hg.state({
        displayValue: hg.value(displayValue),
        channels: {
            action: () => {
                socket.emit(channel, action)
            }
        }
    })
}

module.exports = {
    volumeButton: function(action, displayValue){
        return ActionButton('volume', action, displayValue);
    },
    playbackButton: function(action, displayValue){
        return ActionButton('playback', action, displayValue);
    },
    render: function (state) {
        return h('button', {
            'ev-click': hg.send(state.channels.action)
        }, state.displayValue)
    }
};
