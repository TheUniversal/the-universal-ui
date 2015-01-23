'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;

function App() {
    return hg.state({
        words: ['Hello', 'world!', 'This is mercury']
    });
}

App.render = function render(state) {
    return h('div', state.words.map(word => h('div', [word])));
};

hg.app(document.body, App(), App.render);
