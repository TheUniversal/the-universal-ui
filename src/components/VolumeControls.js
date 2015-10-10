'use strict';

let hg = require('mercury');
let h = hg.h;
let ActionButton = require('./button/ActionButton');

function VolumeControls() {
    return hg.state({
        muteButton: ActionButton.volumeButton('mute', 'Mute'),
        volDownButton: ActionButton.volumeButton('volume-down', '-'),
        volUpButton: ActionButton.volumeButton('volume-up', '+')
    })
}

VolumeControls.render = function(state){
    return h('div.volume-controls', [
        ActionButton.render(state.muteButton),
        ActionButton.render(state.volDownButton),
        ActionButton.render(state.volUpButton)
    ])
};

module.exports = VolumeControls;
