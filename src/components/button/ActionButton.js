'use strict';

let hg = require('mercury');
let h = require('mercury').h;
let socket = require('../../services/Socket');

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
