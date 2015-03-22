'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;
var PlayerList = require('./components/PlayerList');
var PlaybackControls = require('./components/PlaybackControls');

function App() {
    return hg.state({
        title: hg.value('The Universal'),
        playerList: PlayerList(),
        playbackControls: PlaybackControls()
    });
}

App.render = function render(state) {
    return h('div', [
        h('h1', state.title),
        PlayerList.render(state.playerList),
        PlaybackControls.render(state.playbackControls)
    ])
};

hg.app(document.body, App(), App.render);
