'use strict';

var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;

function App() {
    return hg.state({
        words: ['Hello', 'world!', 'This is mercury', 'It is awesome']
    });
}

function stringToDiv(word) {
    return h('div', [word])
}

App.render = function render(state) {
    return h('div', state.words.map(stringToDiv));
};

hg.app(document.body, App(), App.render);
