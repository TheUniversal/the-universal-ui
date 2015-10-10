'use strict';

let hg = require('mercury');
let h = require('mercury').h;
let socket = require('../services/Socket');

function PlayerList() {
    let state = hg.state({
        activePlayer: hg.value(null)
    });

    socket.on('player', function (player) {
        console.log('Active player: ', player.name);
        state.activePlayer.set(player.name);
    });

    return state;
}

PlayerList.render = function (state) {
    return h('div.player-list', state.activePlayer)
};

module.exports = PlayerList;

