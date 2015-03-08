'use strict';

var hg = require('mercury');
var h = require('mercury').h;
var socket = require('../services/Socket');

function PlayerList() {

    var state = hg.state({
        activePlayer: hg.value(null)
    });

    socket.on('player', function (activePlayer) {
        console.log('Active player: ', activePlayer);
        state.activePlayer.set(activePlayer);
    });

    return state;
}

PlayerList.render = function (state) {
    return h('div', state.activePlayer)
};

module.exports = PlayerList;

