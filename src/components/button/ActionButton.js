'use strict';

var hg = require('mercury');
var h = require('mercury').h;
var socket = require('../../services/Socket');

function ActionButton(action, displayValue) {
    return hg.state({
        displayValue: hg.value(displayValue),
        channels: {
            action: () => {
                socket.emit('playback', action)
            }
        }
    })
}

ActionButton.render = function (state) {
    return h('button', {
        'ev-click': hg.send(state.channels.action)
    }, state.displayValue)
};

module.exports = ActionButton;