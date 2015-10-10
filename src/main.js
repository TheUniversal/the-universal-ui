'use strict';

let document = require('global/document');
let hg = require('mercury');
let h = require('mercury').h;
let PlayerList = require('./components/PlayerList');
let PlaybackControls = require('./components/PlaybackControls');
let VolumeControls = require('./components/VolumeControls');

function App() {
    return hg.state({
        title: hg.value('The Universal'),
        playerList: PlayerList(),
        playbackControls: PlaybackControls(),
        volumeControls: VolumeControls()
    });
}

App.render = function render(state) {
    return h('div', [
        h('h1', state.title),
        PlayerList.render(state.playerList),
        PlaybackControls.render(state.playbackControls),
        VolumeControls.render(state.volumeControls)
    ])
};

hg.app(document.body, App(), App.render);
