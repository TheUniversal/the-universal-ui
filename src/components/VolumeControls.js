'use strict';

let hg = require('mercury');
let h = hg.h;
let Commands = require('the-universal-common/command/Commands');
let ActionButton = require('./button/ActionButton');

function VolumeControls() {
    return hg.state({
        muteButton: ActionButton.volumeButton(Commands.VOLUME.MUTE, 'Mute'),
        volDownButton: ActionButton.volumeButton(Commands.VOLUME.DOWN, '-'),
        volUpButton: ActionButton.volumeButton(Commands.VOLUME.UP, '+')
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
