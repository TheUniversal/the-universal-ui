'use strict';

var hg = require('mercury');
var h = require('mercury').h;

function SingleActionButton(action, displayValue, socket) {
    return hg.state({
        displayValue: hg.value(displayValue),
        channels: {
            action: () => {
                socket.emit('playback', action)
            }
        }
    })
}

SingleActionButton.render = function (state) {
    return h('button', {
        'ev-click': hg.send(state.channels.action)
    }, state.displayValue)
};

module.exports = SingleActionButton;